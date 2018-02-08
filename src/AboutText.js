import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";

class AboutText extends Component {
  constructor(props) {
    super(props);

    this.state = { slideIndex: 0 };

    this.slideChange = this.slideChange.bind(this);
  }

  slideChange(slideIndex) {
    this.setState({
      slideIndex
    });
  }

  render() {
    return (
      <div>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.slideChange}
        >
          <div className="slide-block">
            <h3>We focus on building web applications and websites</h3>
            <p>
            Web browsers are constantly evolving and so does it posibilities. Today the browser allows us to create complex websites that are more interactable and with more functionality then before to optimize the mobile and desktop web experience. Now you can run a variety of apps in the web browser, which gives us a lot of new opportunities. Some functionalities still demand a native mobile app to work so get in touch and we can help you figure what wold work best for you.
            </p>
          </div>
          <div className="slide-block">
            <h3>Why web applications?</h3>
            <p>
            - Web applications are an easy way to test concepts without having to dump resources into developing      
            seperate platforms e.g. website, android app and iphone app. </p>
            <p>- No need to download an app to get started, users only need to click an URL link to get to your product.                               
            This makes it easier for customers to share and use. </p>
            <p>- By developing an already existing website into an web app you can achieve a better customer 
            experience and higher level of interaction from the users</p>
          </div>
        </SwipeableViews>
        <div className="about-text-slide-indicator">
          <span
            onClick={() => this.setState({ slideIndex: 0 })}
            className={this.state.slideIndex === 0 ? "active" : ""}
          />
          <span
            onClick={() => this.setState({ slideIndex: 1 })}
            className={this.state.slideIndex === 1 ? "active" : ""}
          />
        </div>
      </div>
    );
  }
}

export default AboutText;
