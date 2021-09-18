import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import Account from './Account';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return (
    <header>
      <div className="container">
        <div className="hd-main">
          {isAuth ? (
            <div className="hd-wrap">
              <div className="hd-wrap-left">
                <Link to="/" className="logo">
                  M
                </Link>
                {/* <div className="mob-search-toggle display-none">
                  <IoSearch />
                </div> */}
                <Search />
              </div>
              <div className="hd-wrap-right">
                <div className="note-links">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/trash">Trash</Link>
                </div>
                <Account />
              </div>
            </div>
          ) : (
            <HeaderLink />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
