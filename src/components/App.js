import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/Calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = Calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display result={String(total)} next={String(next)} operation={(operation)} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
