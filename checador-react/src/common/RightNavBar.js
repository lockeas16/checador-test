import React from "react";
import { Link } from "react-router-dom";

const RightNavBar = () => (
  <div className="uk-navbar-right">
    <ul className="uk-navbar-nav">
      <li>
        <Link to="/login">
          <span className="uk-text-large">Iniciar sesion</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default RightNavBar;
