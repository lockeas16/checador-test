import React from "react";
import { Link } from "react-router-dom";

const LeftNavBar = () => (
  <div className="uk-navbar-left">
    <ul className="uk-list uk-margin-remove">
      <li>
        <Link to="/">
          <span className="uk-text-bold">Checador</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default LeftNavBar;
