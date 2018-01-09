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
    const mockup = document.getElementById("about-flex-wrapper");
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
        <div className="about-flex-wrapper" id="about-flex-wrapper">
          <div className="mockup-phone">
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
          <div className="about-text">
            <h1>What we do?</h1>
            <h3>We make the apps</h3>
            <p>
              When we make the apps there is nothing you can fo about it. They
              will just come from thin air down in your morning coffee.
            </p>
            <br />
            <h3>Why the apps?</h3>
            <p>
              When we make the apps there is nothing you can fo about it. They
              will just come from thin air down in your morning coffee.
            </p>
          </div>
          <div className="about-boxes" id="about-boxes">
            <div className="about-box" />
            <div className="about-box" />
            <div className="about-box" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
