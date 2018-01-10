import React, { Component } from "react";
import { animNavbar } from "./ProcessAnimations";

class Process extends Component {
  componentDidMount() {
    animNavbar();
  }

  render() {
    return (
      <div className="wrapper-process">
        <div className="process-left">
        </div>
        <div className="process-right">
        </div>
      </div>
    );
  }
}

export default Process;
