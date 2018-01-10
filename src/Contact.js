import React, { Component } from "react";
import { animNavbar } from "./ContactAnimations";

class Contact extends Component {
  componentDidMount() {
    animNavbar();
  }

  render() {
    return (
      <div className="wrapper-contact">
      </div>
    );
  }
}

export default Contact;
