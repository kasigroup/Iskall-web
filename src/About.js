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
            Web browsers are constantly evolving and so does it posibilities. Today the browser allows us to create complex websites that are more interactable and with more functionality then before to optimize the mobile and desktop web experience. Now you can run a variety of apps in the web browser, which gives us a lot of new opportunities. Some functionalities still demand a native mobile app to work so get in touch and we can help you figure what wold work best for you.
            </p>
            <br />
            <h3>Why web applications?</h3>
            <p>
            - Web applications are an easy way to test concepts without having to dump resources into developing      
            seperate platforms e.g. website, android app and iphone app. </p>
          <p>- No need to download an app to get started, users only need to click an URL link to get to your product.                               
            This makes it easier for customers to share and use. </p>
          <p>- By developing an already existing website into an web app you can achieve a better customer 
            experience and higher level of interaction from the users</p>
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
