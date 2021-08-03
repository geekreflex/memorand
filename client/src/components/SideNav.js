import React from "react";
import { IoCopyOutline, IoTrashBinOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-menu">
        <div className="nav-icon">
          <IoCopyOutline />
          <div className="title">Notes</div>
        </div>
        <div className="nav-icon">
          <IoTrashBinOutline />
          <div className="title">Trash</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
