import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonpanel';
import Calculate from '../logic/calculate.js';
import '../App.css';


const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick =(e) => {
    setState({ ...state, ...Calculate(state, e.target.name) });
  }


    return (
      <>
      <div className='wrapper fadeInRight'>
        <Display Result={state.total} Operate={state.operation} Next={state.next} />
        <ButtonPanel clickHandler={handleClick}/>
        </div>
      </>
    )
    }

export default App;  
