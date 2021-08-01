import React from "react";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return (
    <header>
      <div className="container">
        <h3>Header Component</h3>
        {isAuth ? <Logout /> : ""}
      </div>
    </header>
  );
};

export default Header;
