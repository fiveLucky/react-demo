import React, { useEffect, useMemo, useState } from 'react';
import { useBattery } from 'react-use';
import styles from './index.less';
import TabPane from './TabPanes';

export default function Index() {
  const batteryState = useBattery();
  const [activeId, setActiveId] = useState(2);
  const {
    charging, // 是否在充电
    chargingTime, // 充满电时间
    dischargingTime, // 可使用时间
    fetched, // 电池状态是否获取成功
    isSupported, // 设备是否支持获取电池状态
    level, // 电量
  } = batteryState;

  // 自定义事件
  const event = useMemo(() => {
    const defaultE = document.createEvent('Event');
    defaultE.defaultActiveId = 1;
    return defaultE;
  }, []);

  useMemo(() => {
    console.log('parent effect');
    event.initEvent('click-active', false, false);
  }, []);
  console.log(batteryState);
  return (
    <div className={styles.batteryContainer}>
      <div className={styles.battery}>
        <div className={styles.batteryHead}></div>
        <div className={styles.batteryNum}>{level * 100} %</div>
        {charging && (
          <div
            className={styles.batteryInner}
            style={{ width: `${level * 100}%` }}
          ></div>
        )}
      </div>
      {charging && <div className={styles.batteryLightning}></div>}
      <div className={styles.tabs}>
        {
          [1, 2, 3, 4].map(n => (<TabPane key={n} data={n} event={event}>this is {n}</TabPane>))
        }
      </div>
    </div >
  );
}
