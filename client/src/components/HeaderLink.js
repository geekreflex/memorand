import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="about">Contribute</Link>
          </li>
        </ul>
      </div>
      <div className="auth-link">
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default HeaderLink;
