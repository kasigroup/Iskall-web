import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
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
