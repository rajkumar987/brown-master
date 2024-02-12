import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Profile = () => {
  const [showProfile, SetShowProfile] = useState(false);
  return (
    <div className="relative cursor-pointer hidden md:block">
      <div
        className="w-10 h-10 flex justify-center items-center"
        onClick={() => SetShowProfile(!showProfile)}
      >
        <img src="/Avatar.svg" alt="Avatar" />
      </div>
      {showProfile && (
        <div className="absolute right-5 top-full  mt-3 w-60 origin-top-right divide-y divide-gray-100 rounded-lg bg-white text-sm font-normal text-slate-900 shadow-md ring-1 ring-slate-900/5 focus:outline-none sm:-mr-3.5 transform opacity-100 scale-100 z-10">
          <div className="flex items-center gap-4 p-3">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src="/Avatar.svg"
                alt=""
              />
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full"></span>
            </div>
            <div>
              <div className=" text-gray-600">Olivia Jenny</div>
              <div className="text-sm text-gray-400">olivia@outlook.com</div>
            </div>
          </div>
          <div className="py-1.5 text-gray-500" role="none">
            <div className="flex items-center px-3.5 py-1">
              <PermIdentityOutlinedIcon style={{ fontSize: 18 }} />
              <a className="block px-3.5 py-1.5 ">View Profile</a>
            </div>
            <div className="flex items-center px-3.5 py-1">
              <BuildOutlinedIcon style={{ fontSize: 18 }} />
              <a className="block px-3.5 py-1.5 ">Configuration</a>
            </div>
            <div className="flex items-center px-3.5 py-1">
              <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 18 }} />
              <a className="block px-3.5 py-1.5 ">Support</a>
            </div>
          </div>
          <div className="py-1.5" role="none">
            <div className="flex items-center px-3.5">
              <LogoutIcon style={{ fontSize: 18 }} className="text-red-500" />
              <a className="block px-3.5 py-1.5 text-red-500">Logout</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
