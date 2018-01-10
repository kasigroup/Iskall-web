import React, { Component } from "react";
import phone from "./img/IphoneX.svg";
import phoneBlockBlue from "./img/Mobilecontent-blue.svg";
import phoneBlockGreen from "./img/Mobilecontent-green.svg";
import phoneBlockOrange from "./img/Mobilecontent-orange.svg";
import { animNavbar, animContentIn, animPhoneContent } from "./AboutAnimations";

class About extends Component {
  componentDidMount() {
    animNavbar();
  }

  startAnimations() {
    const mockup = document.getElementById("mockup-phone");
    mockup.style.display = "flex";
    animContentIn();
    setTimeout(function() {
      animPhoneContent();
      const phone = document.getElementById("mockup-phone-blocks");
      phone.style.display = "block";
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper-about" id="wrap-about">
        <div className="about-left">
          <div className="mockup-phone" id="mockup-phone">
            <img
              src={phone}
              alt="mockup-phone"
              onLoad={this.startAnimations.bind(this)}
            />
            <div className="mockup-phone-blocks" id="mockup-phone-blocks">
              <img src={phoneBlockBlue} alt="mockup-phone-block" />
              <img src={phoneBlockGreen} alt="mockup-phone-block" />
              <img src={phoneBlockOrange} alt="mockup-phone-block" />
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-text">
            <h1>What we do?</h1>
            <h3>We make the apps</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. More interactable.
            </p>
            <br />
            <h3>Why the apps?</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
