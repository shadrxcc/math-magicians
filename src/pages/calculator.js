import React from "react";
import App from "../components/App";

const Calculator = () => {
  return (
    <>
      <div className="intro top">
        <div>
          <h1 className="lets fadeinleft">
            Lets do some
            <br />
            <span className="orange calc"> calculations</span>
          </h1>
        </div>

        <div>
          <App />
        </div>
        
        <div></div>
      </div>
    </>
  );
};

export default Calculator;
