import React, { Component } from 'react'
import Button from './button'
import PropTypes from 'prop-types'

const ButtonPanel = (props) => {
    return (
      <div className='calc'>
                <div>
                    <Button name="AC" className="ash" handleClick={props.clickHandler} />
                    <Button name="+/-" className="ash" handleClick={props.clickHandler} />
                    <Button name="%" className="ash" handleClick={props.clickHandler} />
                    <Button name="/" className="orangeBtn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="7" className="grey" handleClick={props.clickHandler} />
                    <Button name="8" className="grey" handleClick={props.clickHandler} />
                    <Button name="9" className="grey" handleClick={props.clickHandler} />
                    <Button name="*" className="orangeBtn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="4" className="grey" handleClick={props.clickHandler} />
                    <Button name="5" className="grey" handleClick={props.clickHandler} />
                    <Button name="6" className="grey" handleClick={props.clickHandler} />
                    <Button name="-" className="orangeBtn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="1" className="grey" handleClick={props.clickHandler} />
                    <Button name="2" className="grey" handleClick={props.clickHandler} />
                    <Button name="3" className="grey" handleClick={props.clickHandler} />
                    <Button name="+" className="orangeBtn" handleClick={props.clickHandler} />
                </div>

                <div>
                    <Button name="0" className="grey" handleClick={props.clickHandler} />
                    <Button name="." className="grey" handleClick={props.clickHandler} />
                    <Button name="=" className="orangeBtn" handleClick={props.clickHandler} />
                </div>
            </div>
    )
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default ButtonPanel