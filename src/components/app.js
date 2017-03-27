import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <Button name={'Add 1'} clicked={() => this.setState({ counter: this.state.counter++ })} />
      </div>
    );
  }
}
