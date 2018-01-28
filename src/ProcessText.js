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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="slide-block">
            <h3>Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="slide-block">
            <h3>Develop</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
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
