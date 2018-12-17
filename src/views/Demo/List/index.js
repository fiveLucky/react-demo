import React, { Component } from 'react';
import { Table } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import store from './store';
import styles from './index.less';

@observer
export default class List extends Component {
  componetDidMount() {
    store.fetchDataSource();
  }
  render() {
    return (
      <div className={styles.container}>
        <headder className={styles.title}>This is list</headder>
        <Table dataSource={toJS(store.dataSource)}></Table>
      </div>
    );
  }

}