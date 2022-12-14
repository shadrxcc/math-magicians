import React, { Component } from 'react'
import Button from './button'
import PropTypes from 'prop-types'

const ButtonPanel = (props) => {
    return (
      <div className='calc'>
                <div>
                    <Button name="AC" className="ash btn" handleClick={props.clickHandler} />
                    <Button name="+/-" className="ash btn" handleClick={props.clickHandler} />
                    <Button name="%" className="ash btn" handleClick={props.clickHandler} />
                    <Button name="/" className="orangeBtn btn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="7" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="8" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="9" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="*" className="orangeBtn btn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="4" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="5" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="6" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="-" className="orangeBtn btn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="1" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="2" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="3" className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="+" className="orangeBtn btn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="0" className="num-pallette btn number-0" handleClick={props.clickHandler} />
                    <Button name="." className="num-pallette btn" handleClick={props.clickHandler} />
                    <Button name="=" className="orangeBtn btn" handleClick={props.clickHandler} />
                </div>
            </div>
    )
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func
};

export default ButtonPanel