import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Display = (props) => {
  return (
      <div className='result'>
        <span> {props.Result} </span>
        <span> {props.Operate} </span>
        <span> {props.Next} </span>
      </div> 
    )

}


Display.propTypes = {
  Result: PropTypes.string,
  Operate: PropTypes.string,
  Next: PropTypes.string
}

export default Display
