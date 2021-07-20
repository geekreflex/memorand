import React from "react";
import Hamburger from "./Hamburger";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="hd-wrap-left">
            <Hamburger />
            <Search />
          </div>
          <div className="hd-wrap-right">navs</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
