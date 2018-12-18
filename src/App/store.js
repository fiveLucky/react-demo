import { observable, action } from 'mobx';

class Store {

  @observable state = {};


  @action
  setState(value = {}) {
    Object.assign(this.state, value);
  }

}

export default new Store();