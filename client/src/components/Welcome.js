import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-text">
        {/* <h1>Write, Organise &amp; More</h1> */}
        <h1>Note Taking Made Easy &amp; Fun</h1>
        {/* <h1>With Notion, Writing Made Easy</h1> */}
        <p>Write, organise and more. Get ready for a ride with style</p>
        <Link to="/register" className="btn primary">
          Get Started
        </Link>
      </div>
      <div className="welcome-img">
        {/* <div className="img-drop"></div> */}
        <div className="img-con">
          <img src="./notion1.png" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
