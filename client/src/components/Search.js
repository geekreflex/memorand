import React from "react";
import { IoMdSearch, IoMdClose } from "react-icons/io";

const Search = () => {
  return (
    <div className="hd-search">
      <span>
        <IoMdSearch className="search-icon" />
      </span>
      <form>
        <input type="text" placeholder="Search" />
      </form>
      <span>
        <IoMdClose className="search-icon" />
      </span>
    </div>
  );
};

export default Search;
