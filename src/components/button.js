import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
      <button type='button' name={props.name} className={props.className} onClick={props.handleClick} > {props.name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default Button

