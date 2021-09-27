import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoChevronBack, IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import { clearSearchValue, setSearchValue } from '../features/notes/notesSlice';
import { toggleMobSearch } from '../features/actions/actionsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.notes);
  const { mobSearch } = useSelector((state) => state.actions);

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchValue());
  };

  const handleCloseMobSearch = () => {
    dispatch(toggleMobSearch());
  };

  return (
    <SearchWrap visible={mobSearch}>
      <SearchInner>
        <span onClick={handleCloseMobSearch}>
          <i>
            <IoChevronBack />
          </i>
        </span>
        <input
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        <span>
          <i
            onClick={handleClearSearch}
            style={{ visibility: searchValue ? 'visible' : 'hidden' }}
          >
            <IoCloseSharp />
          </i>
        </span>
      </SearchInner>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  position: absolute;
  width: 100%;
  background-color: #202124;
  height: 70px;
  left: 0;
  top: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')} !important;
  align-items: center;
  padding: 0 10px;
  input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    color: #ddd;
  }
  span {
    font-size: 20px;
    color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-radius: 50%;
    i {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

const SearchInner = styled.div`
  background-color: #333;
  height: 50px;
  display: flex;
  border-radius: 5px;
  width: 100%;
  align-items: center;
`;

export default SearchBar;
