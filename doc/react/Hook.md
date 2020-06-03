# Hook

> 让函数组件拥有状态的魔法师。

## hook 的执行过程

组件初始化时，会在组件实例上创建一个 hooks 对象，里面有个 list 数组，里面按照 hook 调用顺序存储了对应的对象，对象信息如下：

```js
const hook = {
  memoizedState: null, // 存储上一次的 value
  baseState: null, //
  baseQueue: null, //
  queue: null, // 是一个对象，存放着 dispatcher，还有其他信息
  next: null, // 指向下一个 hook 对象
};
```

- useState 调用时，执行 mountState ，会生成一个 hook 对象，记录一些值，然后返回一个 `[initialState, dispatcher]` 。memoizedState 这个属性记录着上一次的值； next 指向队列中下一个 hook。正是因为这种存储结构，才会依赖调用顺序，这也是为什么 **hook 调用不能写在 for 和 if 等判断逻辑结构体内**。for 和 if 结构体都是条件判断，会导致 hook 调用顺序变得不固定，会继续导致更新前后状态不一致的情况。

- setState 调用时会执行 updateReducer ，先创建一个 workInProgressHook 中间变量，对当前 hook 对象进行缓存和拓展，函数执行更新逻辑，更新当前 hook 对象的值，
