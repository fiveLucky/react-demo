import { observable, action } from 'mobx';


const data = [
  {
    name: '阿🐝',
    age: 26,
    gender: 'male',
    height: 160,
    weight: 200,
  },
  {
    name: '阿🐔',
    age: 26,
    gender: 'male',
    height: 160,
    weight: 200,
  },
  {
    name: '阿🐱',
    age: 26,
    gender: 'male',
    height: 160,
    weight: 200,
  },
  {
    name: '阿🐺',
    age: 26,
    gender: 'male',
    height: 160,
    weight: 200,
  },
];

class store {
  @observable dataSource = [];

  @action
  changeDataSource(value) {
    Object.assign(this.dataSource, value);
  }

  fetchDataSource = () => {
    // 模拟请求
    setTimeout(() => {
      this.changeDataSource(data);
    }, 1000);
  }

}
export default new store();