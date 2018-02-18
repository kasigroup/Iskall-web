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
            Today our web browsers allow us to create complex websites with a whole new level of intractability and functionality. This optimises the mobile and desktop web experience for the users. Now you can run a variety of apps in the web browser, which gives us a lot of new opportunities.
            </p>
          </div>
          <div className="slide-block">
            <h3>Why web applications?</h3>
            <p>It is basically an advanced website with the functionality of an native app. The advantages are:</p>
            <p>- Faster to develop and deploy the product, concept or idea.</p>
            <p>- No need for the user to download an app use the product which makes it easy to share.</p>
            <p>- It gives an already existing website a better customer experience and a higher level of interaction.</p>
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
