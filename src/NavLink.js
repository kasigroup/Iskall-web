import React, { Component } from "react";

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.testFunction = this.testFunction.bind(this);
  }

  testFunction(x) {
    console.log(x);
    // this.state.history.push(x);
  }

  render() {
    return (
      <a onClick={this.testFunction("/hej")}>
        <li>{this.props.path}</li>
      </a>
    );
  }
}

export default NavLink;
