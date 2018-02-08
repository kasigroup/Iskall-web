import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";

class ProcessText extends Component {
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
            <h3>Define</h3>
            <p>
            Our development process is a continous loop that starts with defining the problems and challenges that needs to be solved and how we can help in the most impactful way. By understanding the users and the market enables us to build the best possible product for them. 
            </p>
          </div>
          <div className="slide-block">
            <h3>Design</h3>
            <p>
            Before we start our programming its important that everyone is on the same page about how things should look and feel. UX/UI design are important elements that are essential in creating a good customer experience. 
            </p>
          </div>
          <div className="slide-block">
            <h3>Develop</h3>
            <p>
            When we are happy with an initial design and have difined the core product we can start programming. This is often the most time consuming but the most rewarding phase. When this is complete we can test the product on users, evaluate the feedback and then iterate the whole process again untill we reach a happy user. 
            </p>
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
          <span
            onClick={() => this.setState({ slideIndex: 2 })}
            className={this.state.slideIndex === 2 ? "active" : ""}
          />
        </div>
      </div>
    );
  }
}

export default ProcessText;
