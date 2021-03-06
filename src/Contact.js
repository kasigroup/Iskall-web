import React, { Component } from "react";
import { animNavbar, animContentIn } from "./ContactAnimations";
import isse from "./img/isse.svg";
import hoggi from "./img/hoggi.svg";

class Contact extends Component {
  componentDidMount() {
    animNavbar();
    animContentIn();

    window.onresize = function(event) {
      animNavbar();
    };
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    return (
      <div className="wrapper-contact">
        <div className="contact-content">
          <div className="contact-content-isse">
            <img className="img-fluid" src={isse} alt="worker-one" />
            <p>Isak Fagerlund</p>
            <span>+46 767932697</span>
          </div>
          <div className="contact-content-text">
            <p>We would love to hear from you!</p>
            <p>
            Are you interested in grabbing a coffee, exploring how we can support your business, our previous work or do you have a project proposal?
            </p>
            <p>Just submit your name and email and we’ll get in touch!</p>
            <a className="contact-button" href="mailto:contact@iskall.io">
              Message us!
            </a>
          </div>
          <div className="contact-content-hoggi">
            <img className="img-fluid" src={hoggi} alt="worker-two" />
            <p>Isak Höglund</p>
            <span>+46 702163758</span>
          </div>
        </div>
        <div className="contact-footer">
          <h3>Iskall AB</h3>
          <p>© 2018 Iskall AB | +46 702163758</p>
          {/* | hello@iskall.io  */}
        </div>
        <div className="contact-mobile">
          <div className="contact-top">
            <div className="contact-content-text">
              <p>We would love to hear from you!</p>
              <p>
              Are you interested in grabbing a coffee, exploring how we can support your business, our previous work or do you have a project proposal?
              </p>
              <p>Just submit your name and email and we’ll get in touch!</p>
              <a className="contact-button" href="mailto:contact@iskall.io">
                Message us!
              </a>
            </div>
          </div>
          <div className="contact-bottom">
            <div className="person-wrapper">
              <div className="person">
                <img src={isse} alt="worker-one" />
                <div className="person-info">
                  <p>Isak Fagerlund</p>
                  <span>+46 767932697</span>
                </div>
              </div>
              <div className="person">
                <img id="hoggi" src={hoggi} alt="worker-one" />
                <div className="person-info">
                  <p>Isak Höglund</p>
                  <span>+46 702163758</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
