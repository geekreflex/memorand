import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <div className="hd-link-wrap">
      <ul className="hd-link">
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="about">Contribute</Link>
        </li>
      </ul>

      <div className="auth-link">
        <Link to="/login">Sign In</Link>
        <Link className="btn primary" to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HeaderLink;
