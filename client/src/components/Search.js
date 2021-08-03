import React from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <div className="search-ic">
        <IoSearchSharp />
      </div>
      <form>
        <div>
          <input placeholder="Hello" />
        </div>
      </form>
      <div className="search-ic">
        <IoCloseSharp />
      </div>
    </div>
  );
};

export default Search;
