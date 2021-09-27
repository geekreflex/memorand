import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Account from './Account';
import MobileSearchBar from './MobileSearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <HeaderInner>
          <MobileSearchBar />
          <div className="hd-wrap left">
            <Link to="/">
              <Logo>M</Logo>
            </Link>
            <SearchBar />
          </div>

          <div className="hd-wrap right">
            <Account />
          </div>
        </HeaderInner>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #5f6368;
  background-color: #202124;
  z-index: 99999;

  a {
    text-decoration: none;
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 100px; */
  .hd-wrap {
    display: flex;

    align-items: center;
  }
  .left {
    width: 100%;
  }
  .right {
    margin-left: 20px;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #335659;
  color: #ddd;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
