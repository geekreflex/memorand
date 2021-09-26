import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import { setSearchValue } from '../features/notes/notesSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.notes);

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <SearchWrap>
      <span>
        <i>
          <IoSearchSharp />
        </i>
      </span>
      <input placeholder="Search" value={searchValue} onChange={handleSearch} />
      <span>
        <i>
          <IoCloseSharp />
        </i>
      </span>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  width: 600px;
  background-color: #333;
  height: 50px;
  display: flex;
  border-radius: 5px;
  input {
    width: calc(100% - 100px);
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default SearchBar;
