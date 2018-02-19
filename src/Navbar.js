import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import iceCream from "./img/iceCream.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.testFunction = this.testFunction.bind(this);
  }

  render() {
    return (
      <div className="navbar">
        <ul>
          <Link to="/">
            <li>
              <img src={iceCream} alt="logo" />
            </li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/process">
            <li>Process</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
