import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/Calculate';

/* eslint-disable react/destructuring-assignment, react/no-access-state-in-setstate */
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(buttonName) {
  //   const { total, next, operation } = Calculate(this.state, buttonName);
  //   this.setState({ total, next, operation });
  // }

  handleClick(buttonName) {
    this.setState(Calculate(this.state, buttonName));
  }

  render() {
    // const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display result={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
