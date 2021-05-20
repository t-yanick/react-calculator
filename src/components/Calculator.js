import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

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

  handleClick(buttonName) {
    this.setState(Calculate(this.state, buttonName));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Time for some Maths!</h2>
        </div>
        <div className="App">
          <Display result={this.state.next || this.state.total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
