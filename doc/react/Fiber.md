# Fiber

> Fiber ：协程，控制流程的让出机制。

## Why Fiber？

在引入 Fiber 之前，react 每次更新都会递归 diff dom tree，霸占浏览器资源，阻塞线程。显然会导致一些交互延迟，用户体验上感受到卡顿、掉帧。[看一个 demo](https://codesandbox.io/s/koyz664q35)

Fiber 的出现主要目的就是为了提升用户体验，解决思路就是不能长时间霸占主线程，通过时间分片来 “分时分批” 更新视图。

## 夹缝中求生存

> 由主动变被动，曾经高高在上，现在俯首称臣，马首是瞻。

为了渲染不占用过多浏览器资源，当出现更高优先级的任务时，react 要交出控制权，释放主线程，即中断渲染过程。然而由于浏览器里无法区分任务优先级高低，只能通过另一种思路来协调线程使用权——超时检查机制。

### requestIdleCallback

这个 API 是浏览器原生提供的，简单来说，requestIdleCallback( callback, 2000 ) 支持传入一个 callback 回调函数，在浏览器空闲时执行，另外一个参数 timeout ：2000 指的是如果浏览器一直没有空闲执行，那就在 timeout 之后必须执行一次 callback，防止饿死。具体可以参考[这篇文章](https://juejin.im/post/5ad71f39f265da239f07e862)。

目前 requestIdleCallback 目前只有 Chrome 支持，所以 [React 自己实现了一个](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerHostConfig.default.js)，大体上就是通过 setTimeout 和 MessageChannel 通过渲染时间计算来模拟的。

由于 react 得到的更新时间有限，有些时候就不得不**中断**更新以保证浏览器及时处理新的任务。

这里就体现出了 Fiber 这种“夹缝中求生存”的感觉了，

## React 为了适应 Fiber 而做的改变

### 更新了 VirtualDOM 结构（called Fiber）

```js
export type Fiber = {
  // Fiber 类型信息
  type: any,
  // ...

  // ⚛️ 可以看成是双向链表结构，或者多向链表结构
  // 指向父节点，或者render该节点的组件
  return: Fiber | null,
  // 指向第一个子节点
  child: Fiber | null,
  // 指向下一个兄弟节点
  sibling: Fiber | null,
};
```

了解过 react Fiber 的应该都知道了， Fiber 使用的链表数据结构。链表结构只是一个意外的结果，Fiber 结构设计只是为了模拟函数调用栈结构。为什么需要这种链表形式？函数调用栈形式有什么问题么？由于函数调用栈很难中断，更不易恢复，也不利于异步。这种调用栈，不是程序所能控制的， 如果你要恢复递归现场，可能需要从头开始, 才能恢复到之前的调用栈。而链表结构就可以随意中断，也很容易从上一次中断的地方继续遍历下去。

简单来讲，链表结构是为了**中断和恢复**。

### 两个阶段

> 可以简单区分为 render 前和 render 之后 两个阶段。

- ⚛️ 协调阶段: 可以认为是 Diff 阶段, 这个阶段可以被中断, 这个阶段会找出所有节点变更，例如节点新增、删除、属性变更等等, 这些变更 React 称之为'副作用(Effect)' . 以下生命周期钩子会在协调阶段被调用：

  constructor  
  componentWillMount 废弃  
  componentWillReceiveProps 废弃  
  static getDerivedStateFromProps  
  shouldComponentUpdate  
  componentWillUpdate 废弃  
  render

- ⚛️ 提交阶段: 将上一个阶段计算出来的需要处理的**副作用(Effects)**一次性执行了。这个阶段必须**同步**执行，不能被打断. 这些生命周期钩子在提交阶段被执行:

  getSnapshotBeforeUpdate() 严格来说，这个是在进入 commit 阶段前调用  
  componentDidMount  
  componentDidUpdate  
  componentWillUnmount

也就是说，在协调阶段如果时间片用完，React 就会选择让出控制权。因为协调阶段执行的工作不会导致任何用户可见的变更，所以在这个阶段让出控制权不会有什么问题。

需要注意的是：因为协调阶段可能被中断、恢复，甚至重做，⚠️React 协调阶段的生命周期钩子可能会被调用多次!, 例如 componentWillMount 可能会被调用两次。因此建议协调阶段的生命周期钩子不要包含副作用. **索性 React 就废弃了这部分可能包含副作用的生命周期方法，例如 componentWillMount、componentWillUpdate.** v17 后我们就不能再用它们了, 所以现有的应用应该尽快迁移.

## 其他细节

参考[这篇文章](https://juejin.im/post/5dadc6045188255a270a0f85)，讲的很棒。我这里只是做个笔记，以加深自己的印象。
