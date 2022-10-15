import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="logo" to="/">
            <span>MATH</span>
            <br />
            <span>MAGICIANS</span>
          </Link>
        </div>
        <div className="sub">
          <Link className="sublink" to="/">
            Home
          </Link>
          <Link className="sublink" to="/calculator">
            Calculator
          </Link>
          <Link className="sublink" to="/quote">
            Quote
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
