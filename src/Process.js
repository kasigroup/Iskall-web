import React, { Component } from "react";
import { animNavbar } from "./ProcessAnimations";
import table from "./img/table.svg";
import plane from "./img/plane.svg";
import define from "./img/define.svg";
import design from "./img/design.svg";
import develop from "./img/develop.svg";
import tableMobile from "./img/table-mobile.svg";
import ProcessText from "./ProcessText";

class Process extends Component {
  componentDidMount() {
    animNavbar();
  }

  render() {
    return (
      <div className="wrapper-process">
        <div className="process-left">
          <div className="process-left-content">
            <div className="process-box">
              <img src={define} alt="define" />
              <div className="process-box-text">
                <h3>Define</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
            <div className="process-box">
              <img src={design} alt="design" />
              <div className="process-box-text">
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
            <div className="process-box">
              <img src={develop} alt="develop" />
              <div className="process-box-text">
                <h3>Develop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
          </div>
          <div className="process-text-mobile">
            <ProcessText />
          </div>
        </div>
        <div className="process-right">
          <div className="process-plane">
            <img src={plane} alt="table" />
          </div>
          <div className="process-table">
            <img className="img-fluid" src={table} alt="table" />
          </div>
          <div className="process-table-mobile">
            <img src={tableMobile} alt="table" />
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
