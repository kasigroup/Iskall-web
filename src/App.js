import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Shake from "shake.js";
import iceCream from "./img/iceCream.svg";
import Home from "./Home";
import About from "./About";
import Process from "./Process";
import Contact from "./Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.navChange = this.navChange.bind(this);

    var myShakeEvent = new Shake({
      threshold: 15,
      timeout: 1000
    });

    myShakeEvent.start();

    window.addEventListener("shake", shakeEventDidOccur, false);

    function shakeEventDidOccur() {
      alert("Shake it like a polaroid picture!");
    }
  }

  navChange() {
    console.log("changed");
  }

  render() {
    return (
      <Router>
        <div id="router-wrapper">
          <div className="navbar">
            <ul className="navbar-ul">
              <NavLink to="/">
                <li>
                  <img src={iceCream} alt="logo" />
                </li>
              </NavLink>
              <NavLink exact to="/" id="home-link">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" id="about-link">
                <li>About</li>
              </NavLink>
              <NavLink
                to="/process"
                id="process-link"
              >
                <li>Process</li>
              </NavLink>
              <NavLink
                to="/contact"
                id="contact-link"
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <Route
            render={({ location }) => (
              <div className="anim-container">
                <ReactTransitionGroup>
                  <Switch key={location.key} location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/process" component={Process} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </ReactTransitionGroup>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
