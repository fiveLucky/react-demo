import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';


export default function TabPane(props) {
  const ref = useRef(null);
  const [id, setId] = useState(props.event.defaultActiveId);

  useEffect(() => {
    console.log('child effect');
    ref.current.addEventListener('click-active', (e) => {
      console.log(e, props.data);
      setId(e.activeId);
    });
  }, []);

  return <div ref={ref} onClick={() => {
    props.event.activeId = props.data;
    ref.current.dispatchEvent(props.event);
  }} className={`${styles.tabPane} ${id === props.data && styles.active}`}></div>;
}