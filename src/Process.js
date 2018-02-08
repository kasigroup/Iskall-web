import React, { Component } from "react";
import { animNavbar, animContentIn } from "./ProcessAnimations";
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
    animContentIn();
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
                Our development process is a continous loop that starts with defining the problems and challenges that needs to be solved and how we can help in the most impactful way. By understanding the users and the market enables us to build the best possible product for them. 
                </p>
              </div>
            </div>
            <div className="process-box">
              <img src={design} alt="design" />
              <div className="process-box-text">
                <h3>Design</h3>
                <p>
                Before we start our programming its important that everyone is on the same page about how things should look and feel. UX/UI design are important elements that are essential in creating a good customer experience. 
                </p>
              </div>
            </div>
            <div className="process-box">
              <img src={develop} alt="develop" />
              <div className="process-box-text">
                <h3>Develop</h3>
                <p>
                When we are happy with an initial design and have difined the core product we can start programming. This is often the most time consuming but the most rewarding phase. When this is complete we can test the product on users, evaluate the feedback and then iterate the whole process again untill we reach a happy user. 
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
