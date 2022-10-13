import React, { Component } from 'react'
import Display from './display';
import ButtonPanel from './buttonpanel';
import Calculate from '../logic/calculate.js';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => Calculate(state, buttonName));
  };

  render() {
    return (
      <>
      <div className='wrapper'>
        <Display Result={this.state.total} Operate={this.state.operation} Next={this.state.next} />
        <ButtonPanel clickHandler={this.handleClick}/>
        </div>
      </>
    )
  }
}
