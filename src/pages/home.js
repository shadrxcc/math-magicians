import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="top">
        <h1 className="h-intro fadeintop">
          Welcome to <br /> <span className="orange">Math Magicians</span>
        </h1>
        <p className="text">
          If you`re anything like me, you probably can`t do simple math in your
          head. Or maybe you can, but it takes you a while and it`s not always
          accurate. That`s where a calculator comes in handy!
        </p>

        <div className="btn-cont">
          <Link className="sublink BTN" to="/calculator">
            Get Started
          </Link>
        </div>
        
        <div className="card">
          <div className="fadeinleft cards">
            <iconify-icon
              class="speed"
              icon="fluent:accessibility-checkmark-20-regular"
            ></iconify-icon>
            <h2>Accessible</h2>
            <p>Simple design to help you do basic math operations.</p>
          </div>
          <div className="fadeinright cards">
            <iconify-icon
              class="speed"
              icon="fluent-mdl2:speed-high"
            ></iconify-icon>
            <h2>Fast calculations</h2>
            <p>Built to help you do math more quickly and accurately.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
