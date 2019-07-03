import React, { Component } from 'react';

import styles from './index.less';

export default class Home extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={`title-huge primary-color text-align-center ${styles.title}`}>
          <span>Welcom to home ！Nice to meet you!</span>
        </div>
      </div>
    );
  }
}