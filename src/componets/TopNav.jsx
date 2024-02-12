import React from "react";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Stepper from "./Stepper";

const TopNav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full  flex justify-center md:justify-end items-center py-5">
        <div className="flex md:justify-around w-3/4">
          <SearchBar />
          <div className="flex items-center gap-5 ">
            <Notifications />
            <Profile />
          </div>
        </div>
      </div>
      <div className="w-3/4 lg:w-1/2 ">
        <Stepper />
      </div>
    </div>
  );
};

export default TopNav;
