import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import Account from './Account';
import HeaderLink from './HeaderLink';
import { IoMenuSharp } from 'react-icons/io5';
import { toggleNav } from '../features/action/actionSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const toggleSideNav = () => {
    dispatch(toggleNav());
  };

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
                <div className="hd-menu-ic" onClick={toggleSideNav}>
                  <IoMenuSharp />
                </div>
                {/* <Search /> */}
              </div>
              <div className="hd-wrap-right">
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
