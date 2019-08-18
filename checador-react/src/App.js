import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Router from "./Router";
import NavBar from "./common/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
