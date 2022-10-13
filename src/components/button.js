import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Button extends Component {
  render() {
    return (
      <button type='button' name={this.props.name} onClick={e => this.props.handleClick(e.target.name)} > {this.props.name}</button>
    )
  }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

