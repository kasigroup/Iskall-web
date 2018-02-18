import React, { Component } from "react";
import logo from "./img/Iskall.png";
import moln from "./img/moln.svg";
import molnFlipped from "./img/moln-flipped.svg";
import webPage from "./img/webPage.svg";
import webMock from "./img/mobile-web-mock.svg";
import iceCream from "./img/iceCream.svg";
import { animNavbar, animMockupWebsite } from "./HomeAnimations";

class Home extends Component {
  componentDidMount() {
    animNavbar();
  }

  showMockupWriting() {
    const mockup = document.getElementById("mock-website-content");
    mockup.style.display = "block";
    animMockupWebsite();
  }

  render() {
    return (
      <div className="wrapper-start" id="wrap-start">
        <div className="intro-left">
          <div className="content">
            <div className="logo">
              <div id="svg-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="iceCream">
                <img src={iceCream} alt="ice" />
              </div>
            </div>
            <div className="intro-text">
              <h3>
              We make digital products that enable your ideas and delevopes your business. We are a small team of  happy web developers that always strive for a greater team of happy customers
              </h3>
              <a className="contact-btn" href="mailto:contact@iskall.io@gmail.com">
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="intro-overlay">
          <div className="overlay-image">
            <div className="mockup-website" id="mock-website">
              <img
                id="frontweb"
                src={webPage}
                alt="browser"
                onLoad={this.showMockupWriting.bind(this)}
              />
              <div className="mockup-website-content" id="mock-website-content">
                <div className="mock-text-top">
                  <div className="mock-text" />
                </div>
                <div className="mock-text-left">
                  <div className="mock-text" />
                  <div className="mock-text" />
                  <div className="mock-text" />
                </div>
                <div className="mock-text-right">
                  <div className="mock-text" />
                  <div className="mock-text" />
                  <div className="mock-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="clouds">
            <div className="cloud">
              <img src={moln} alt="cloud" />
            </div>
            <div className="cloud">
              <img src={moln} alt="cloud" />
            </div>
            <div className="cloud">
              <img src={molnFlipped} alt="cloud" />
            </div>
          </div>
          <div className="grounds">
            <div className="ground" />
            <div className="ground" />
            <div className="ground" />
          </div>
          <div className="mockup-onMobile">
            <img src={webMock} alt="mockOnMobile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
