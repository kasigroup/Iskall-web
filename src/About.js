import React, { Component } from "react";
import AboutText from "./AboutText";
import phone from "./img/IphoneX.svg";
import phoneBlockBlue from "./img/Mobilecontent-blue.svg";
import phoneBlockGreen from "./img/Mobilecontent-green.svg";
import phoneBlockOrange from "./img/Mobilecontent-orange.svg";
import phoneMock from "./img/phoneMock.svg";
import { animNavbar, animContentIn, animPhoneContent } from "./AboutAnimations";

class About extends Component {
  componentDidMount() {
    animNavbar();

    window.onresize = function(event) {
      animNavbar();
    };
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  startAnimations() {
    const mockup = document.getElementById("mockup-phone");
    mockup.style.opacity = "1";
    animContentIn();
    setTimeout(function() {
      animPhoneContent();
      if (document.getElementById("mockup-phone-blocks") === null) {
        // console.log("Do nothing")
      } else {
        const phone = document.getElementById("mockup-phone-blocks");
        phone.style.opacity = "1";
      }
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
          <img src={phoneMock} alt="phone" className="phoneMock-mobile" />
        </div>
        <div className="about-right">
          <div className="about-text">
            <h1>What we do?</h1>
            <h3>We focus on building web applications and websites</h3>
            <p>
            Today our web browsers allow us to create complex websites with a whole new level of intractability and functionality. This optimises the mobile and desktop web experience for the users. Now you can run a variety of apps in the web browser, which gives us a lot of new opportunities.             </p>
            <br />
            <h3>Why web applications?</h3>
            <p>It is basically an advanced website with the functionality of an native app. The advantages are:</p>
            <ul>
              <li>Faster to develop and deploy the product, concept or idea.</li>
              <li>No need for the user to download an app use the product which makes it easy to share.</li>
              <li>It gives an already existing website a better customer experience and a higher level of interaction.</li>
            </ul>
          </div>
          <div className="about-text-mobile">
            <AboutText />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
