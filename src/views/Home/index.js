import React, { Component } from 'react';

import styles from './index.less';
const img = 'https://thumbnail10.baidupcs.com/thumbnail/ccf437f7af4e9cb681a78eaad8064eb8?fid=2167865410-250528-1109115537803980&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XVCC18z%2fQrth8W7sVDr6ic%2bKyS0%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8347344294273462708&dp-callid=0&time=1545829200&size=c1680_u1050&quality=90&vuk=2167865410&ft=image&autopolicy=1';

export default class Home extends Component {

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="" />
        <div className={`title-huge primary-color text-align-center ${styles.title}`}>Welcom to home ！</div>
      </div>
    );
  }
}