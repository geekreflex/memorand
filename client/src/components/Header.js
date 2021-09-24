import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Account from './Account';
import { IoSearchSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <HeaderInner>
          <div className="hd-wrap left">
            <Logo>M</Logo>
            <MobSearchIcon>
              <IoSearchSharp />
            </MobSearchIcon>
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
    /* width: 50%; */
  }
  .left {
    width: 70%;
  }
  .right {
    margin-left: 20px;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const MobSearchIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  font-size: 20px;
  color: #ddd;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    display: flex;
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
