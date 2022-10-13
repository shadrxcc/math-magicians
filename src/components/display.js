import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Display extends Component {

  render() {
    return (
      <p className='result'>
        <span> {this.props.Result} </span>
        <span> {this.props.Operate} </span>
        <span> {this.props.Next} </span>
      </p> 
    )
  }
}


Display.propTypes = {
  Result: PropTypes.string,
  Operate: PropTypes.string,
  Next: PropTypes.string
}
