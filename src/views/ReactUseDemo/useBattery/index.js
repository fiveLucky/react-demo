import React from 'react';
import { useBattery } from 'react-use';
import styles from './index.less';

export default function Index() {
  const batteryState = useBattery();
  const {
    charging, // 是否在充电
    chargingTime, // 充满电时间
    dischargingTime, // 可使用时间
    fetched, // 电池状态是否获取成功
    isSupported, // 设备是否支持获取电池状态
    level, // 电量
  } = batteryState;
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
    </div>
  );
}
