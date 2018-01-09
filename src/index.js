import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Loading from "./Loading";
import registerServiceWorker from "./registerServiceWorker";

class TheApp extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  transitionPage() {
    console.log("transitioning");
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return <Loading />; // render null when app is not ready
    }

    return <App />;
  }
}

ReactDOM.render(<TheApp />, document.getElementById("root"));
registerServiceWorker();
