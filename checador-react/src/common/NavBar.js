import React from "react";
import { withRouter } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

const NavBar = ({}) => (
  <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
    <div className="uk-container uk-container-expand">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="true"
      >
        <LeftNavBar />
        <RightNavBar />
      </nav>
    </div>
  </section>
);

export default withRouter(NavBar);
