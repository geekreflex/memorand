import React from "react";
import { useSelector } from "react-redux";
import { IoCopyOutline, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { nav } = useSelector((state) => state.action);

  return (
    <div className={nav ? "side-nav" : "side-nav hidden"}>
      <div className="side-nav-menu">
        <Link to="/dashboard">
          <div className="nav-icon">
            <IoCopyOutline />
            <div className="title">Notes</div>
          </div>
        </Link>
        <Link to="trash">
          <div className="nav-icon">
            <IoTrashBinOutline />
            <div className="title">Trash</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
