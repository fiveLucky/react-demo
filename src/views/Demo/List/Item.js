import React, { Component } from 'react';


export default class List extends Component {
  componentDidMount() {
    this.props.f();
  }
  render() {
    return (
      <div>
        Item
      </div>
    );
  }

}