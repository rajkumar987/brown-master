import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { SearchHistory } from "../constants";

const SearchBar = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState(SearchHistory);

  const handleHistory = (id) => {
    setSearchHistory(searchHistory.filter((each) => each.id !== id));
  };

  return (
    <div className="flex justify-around relative md:w-1/2 w-full">
      <div className="relative w-full ">
        <input
          type="text"
          className="py-3 rounded-lg px-5 text-sm border w-full outline-none"
          placeholder="Search or Jump to..."
          onClick={() => setShowHistory(!showHistory)}
          // onBlur={() => setShowHistory(false)}
        />
        <SearchIcon
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          style={{ fontSize: 24 }}
        />
      </div>
      {showHistory && searchHistory.length > 0 && (
        <ul className="bg-white flex flex-col gap-5 shadow-xl w-full absolute top-14 border rounded-lg p-4 max-h-64 overflow-scroll z-20">
          {searchHistory.map((item) => (
            <li
              className="flex justify-between text-sm cursor-pointer"
              onClick={() => setShowHistory(false)}
            >
              <p>{item.value}</p>
              <CloseIcon
                style={{ fontSize: 20 }}
                className="cursor-pointer"
                onClick={() => handleHistory(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
