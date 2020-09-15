import React, { useEffect, useState } from 'react';

class Children extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: false,
    };
  }
  componentDidMount() {}
  //每次更新都会执行，不管是state更新还是props更新。
  // 这里得到的state是更新之前的
  static getDerivedStateFromProps(props, state) {
    console.log('change 1', props, state);
    return { a: !state.a };
  }
  // 更新期才会执行，
  getSnapshotBeforeUpdate() {
    console.log('change 2');
    return 'asdfdsfs';
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  click = () => {
    this.setState(state => ({
      a:!state.a
    }));
  }

  render() {
    return <div onClick={this.click}>this is Children</div>;
  }
}

export default function Index() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setState((oldState) => !oldState);
    }, 1000);
  }, []);

  return (
    <>
      <div>this is parent</div>
      <Children state={state} />
    </>
  );
}
