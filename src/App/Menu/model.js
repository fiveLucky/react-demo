export default [
  {
    navName: '首页',
    path: '/',
    children: [],
  },
  {
    navName: '示例1',
    path: '/Demo',
    children: [
      {
        navName: '列表',
        path: '/Demo',
        children: [],
      },
      {
        navName: '详情',
        path: '/Demo/Detail',
        children: [],
      },
    ],
  },
  {
    navName: '示例2',
    path: '/Demo2',
    children: [
      {
        navName: '列表',
        path: '/Demo2/List',
        children: [],
      },
      {
        navName: '详情',
        path: '/Demo2/Detail',
        children: [],
      },
    ],
  },
];