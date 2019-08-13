import React, { Component } from 'react';
import List from './List';

export default class Index extends Component {
  a = 'a'
  f = () => {
    console.log(this.a);
  }

  render() {
    return (
      <>
        <List f={() => {
          console.log(this.a);
        }}></List>
      </>
    );
  }
}