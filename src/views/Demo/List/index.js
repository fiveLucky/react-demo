import React from "react";
import { Table } from "antd";

import store from "./store";
import styles from "./index.less";

const genderEnum = {
  male: "男",
  female: "女",
};
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "年龄（岁）",
    dataIndex: "age",
  },
  {
    title: "性别",
    dataIndex: "gender",
    render: (text) => <span>{genderEnum[text]}</span>,
  },
  {
    title: "身高（cm）",
    dataIndex: "height",
  },
  {
    title: "体重（公斤）",
    dataIndex: "weight",
  },
];

export default function List() {
  const click = (event) => {
    event.preventDefault();
    alert("a");
    window.history.pushState("/Demo");
  };
  const { loading, dataSource } = store();
  return (
    <div className={styles.container}>
      <div className={styles.title}>所有人员列表</div>
      <a href="" onClick={click}>
        skskdfhjdsfhjs
      </a>
      <Table rowKey="index" dataSource={dataSource} loading={loading} columns={columns} />
    </div>
  );
}
