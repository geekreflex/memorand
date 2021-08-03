import React from "react";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import Search from "./Search";
import Account from "./Account";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return (
    <header>
      <div className="container">
        <div className="hd-wrap">
          <Search />
          <Account />
        </div>
      </div>
    </header>
  );
};

export default Header;
