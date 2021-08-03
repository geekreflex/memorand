import React from "react";

const Account = () => {
  return (
    <div className="acct">
      <div className="acct-user-circle"></div>
      <div className="acct-wrap">
        <div className="acct-info">
          <div className="acct-pic"></div>
          <div className="acct-user">
            <h3>Jerry Nwosu</h3>
            <p>jerrynwosu007@gmail.com</p>
          </div>
          <button className="acct-manage-btn btn-neutral">
            Manage your Account
          </button>
        </div>
        <div className="acct-signout">
          <button className="btn-neutral">Signout</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
