import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import iceCream from "./img/iceCream.svg";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="router-wrapper">
          <div className="navbar">
            <ul>
              <Link to="/">
                <li><img src={iceCream} alt="logo" /></li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/process">
                <li>Process</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <Route
            render={({ location }) => (
              <div className="anim-container">
                <ReactTransitionGroup>
                  <Switch key={location.key} location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
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
