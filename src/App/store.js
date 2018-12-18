import { observable, action } from 'mobx';


class Store {

  @observable collapsed = false;


  @action
  setStore(value = {}) {
    Object.assign(this, value);
  }
  onCollapse = (collapsed) => {
    this.setStore({ collapsed });
  }

}

export default new Store();