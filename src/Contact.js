import React, { Component } from "react";
import { animNavbar } from "./ContactAnimations";
import isse from "./img/isse.svg";
import hoggi from "./img/hoggi.svg";

class Contact extends Component {
  componentDidMount() {
    animNavbar();
  }

  render() {
    return (
      <div className="wrapper-contact">
        <div className="contact-content">
          <div className="contact-content-isse">
            <img className="img-fluid" src={isse} alt="worker-one"/>
            <p>Isak Fagerlund</p>
            <span>+46 070893472</span>
          </div>
          <div className="contact-content-text">
            <p>We would love to hear from you!</p>
            <p>Are you interested in free coffee, exploring how we can support your business, our previous work or do you have a project proposal?</p>
            <p>Just submit your name and email and we’ll get in touch!</p>
            <a className="contact-button" href="mailto:contact@iskall.io">Message us!</a>  
          </div>
          <div className="contact-content-hoggi">
            <img className="img-fluid" src={hoggi} alt="worker-two"/>
            <p>Isak Höglund</p>
            <span>+46 070893472</span>
          </div>
        </div>
        <div className="contact-footer">
          <h3>Iskall AB</h3>
          <p>© 2018 Iskall AB | hello@iskall.io | 036-123 123</p>
        </div>
      </div>
    );
  }
}

export default Contact;
