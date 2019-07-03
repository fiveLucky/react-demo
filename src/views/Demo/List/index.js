import React, { Component } from 'react';
import { Table } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import store from './store';
import styles from './index.less';

const genderEnum = {
  male: '男',
  female: '女'
};
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄（岁）',
    dataIndex: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    render: text => (<span>{genderEnum[text]}</span>)
  },
  {
    title: '身高（cm）',
    dataIndex: 'height',
  },
  {
    title: '体重（公斤）',
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
        <div className={styles.title}>所有人员列表</div>
        <Table dataSource={toJS(dataSource)} loading={loading} columns={columns} />
      </div>
    );
  }

}