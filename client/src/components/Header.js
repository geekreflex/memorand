import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Account from './Account';

const Header = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <HeaderInner>
          <div>
            <SearchBar />
          </div>

          <div>
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
  padding: 0 100px;
  div {
    display: flex;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export default Header;
