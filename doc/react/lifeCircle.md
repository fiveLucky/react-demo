
# React 生命周期

[React中文文档](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)

## es6 放在 class 里  16.3 之前

- constructor   初始化props和state

- componentWillMount 组件即将创建

- render  创建虚拟dom

- componentDidMount 创建完成


- componentWillReceiveProps 组件即将更新props

- shouldComponentUpdate 手动选择是否执行更新

- render  执行diff操作

- componentWillUpdate 组件即将更新

- componentDidUpdate 更新完成



## es6 放在 class 里  16.3 之后

- constructor   初始化props和state

- static getDerivedStateFormProps  不常用，不能访问实例

- render  创建虚拟dom

- componentDidMount 创建完成


- static getDerivedStateFormProps  不常用，不能访问实例

- shouldComponentUpdate 手动选择是否执行更新

- render  更新

- getSnapshotBeforeUpdate 在更新前执行，以获取旧的信息，传递给下一个生命周期

- componentDidUpdate 更新完成

- componentWillUnmount


- static getDerivedStateFormError 后代组件报错时调用

- componentDidCatch 后代组件报错时调用