import React, { Component } from 'react';
import { Table } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import store from './store';
import styles from './index.less';


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '身高',
    dataIndex: 'height',
  },
  {
    title: '体重',
    dataIndex: 'weight',
  },
];
@observer
export default class List extends Component {
  componentDidMount() {
    store.fetchDataSource();
  }
  render() {
    const { loading, dataSource } = store;
    return (
      <div className={styles.container}>
        <div className={styles.title}>This is list</div>
        <Table dataSource={toJS(dataSource)} loading={loading} columns={columns}></Table>
      </div>
    );
  }

}