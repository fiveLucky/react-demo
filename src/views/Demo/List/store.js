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
  @observable loading = false;

  @action
  changeDataSource(value) {
    Object.assign(this.dataSource, value);
  }

  @action
  fetchDataSource = () => {
    this.loading = true;
    // 模拟请求
    setTimeout(() => {
      this.loading = false;
      this.changeDataSource(data);
    }, 1000);
  }

}
export default new store();