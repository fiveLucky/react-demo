import { observable, action } from 'mobx';

const menuTree = [
  {
    navName: '首页',
    path: '/web',
    children: [],
  },
  {
    navName: '示例1',
    path: '/web/Demo',
    children: [
      {
        navName: '列表',
        path: '/web/Demo',
        children: [],
      },
      {
        navName: '详情',
        path: '/web/Demo/Detail',
        children: [],
      },
    ],
  },
  {
    navName: '示例2',
    path: '/Demo2',
    children: [
      {
        navName: '生命周期',
        path: '/web/Demo2/lifeCircle',
        children: [],
      },
    ],
  },
];

class Store {

  @observable collapsed = false;
  @observable menuTree = [];


  @action
  setStore(value = {}) {
    Object.assign(this, value);
  }
  onCollapse = (collapsed) => {
    this.setStore({ collapsed });
  }

  fetchMenuTree = () => {
    setTimeout(() => {
      this.setStore({ menuTree });
    }, 500);
  }

}

export default new Store();