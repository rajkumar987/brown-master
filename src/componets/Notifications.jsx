import React, { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const Notifications = () => {
  const [showNotifications, SetShowNotifications] = useState(false);
  return (
    <div className="relative cursor-pointer hidden md:block">
      <div
        className="w-10 h-10 rounded-lg bg-white shadow-md border flex justify-center items-center"
        onClick={() => SetShowNotifications(!showNotifications)}
      >
        <NotificationsNoneOutlinedIcon />
      </div>
      {showNotifications && (
        <div className="absolute right-5 top-full  mt-3 w-96 origin-top-right divide-y divide-gray-100 rounded-lg bg-white text-sm font-normal text-slate-900 shadow-md ring-1 ring-slate-900/5 focus:outline-none sm:-mr-3.5 transform opacity-100 scale-100 px- z-10">
          <div className="flex items-center gap-4 p-3 justify-between">
            <p className="text-lg">Notification</p>
            <div className="bg-gray-200 p-1 px-1.5 rounded-full">
              <CloseOutlinedIcon
                style={{ fontSize: 18 }}
                className="cursor-pointer"
                onClick={() => SetShowNotifications(false)}
              />
            </div>
          </div>
          <div className="divide-y ">
            <div
              className=" text-gray-500 flex justify-between items-center p-2"
              role="none"
            >
              <div className="bg-blue-200 h-10 w-10 rounded-full flex justify-center items-center">
                <CalendarTodayOutlinedIcon
                  style={{ fontSize: 20 }}
                  className="text-blue-600"
                />
              </div>
              <div className="space-y-1 text-center">
                <p>Time Sheet Created</p>
                <p className="text-xs">
                  For Invoice <span className="text-blue-500">#INV-369</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs">11:23am</p>
                <p className="text-sm">11-sep-2023</p>
              </div>
            </div>

            <div
              className=" text-gray-500 flex justify-between items-center p-3"
              role="none"
            >
              <div className="bg-blue-200 h-10 w-10 rounded-full flex justify-center items-center">
                <CalendarTodayOutlinedIcon
                  style={{ fontSize: 20 }}
                  className="text-blue-600"
                />
              </div>
              <div className="space-y-1 text-center">
                <p>Time Sheet Created</p>
                <p className="text-xs">
                  For Invoice <span className="text-blue-500">#INV-369</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs">11:23am</p>
                <p className="text-sm">11-sep-2023</p>
              </div>
            </div>
            <div
              className=" text-gray-500 flex justify-between items-center p-3"
              role="none"
            >
              <div className="bg-orange-200 h-10 w-10 rounded-full flex justify-center items-center">
                <CalendarTodayOutlinedIcon
                  style={{ fontSize: 20 }}
                  className="text-orange-600"
                />
              </div>
              <div className="space-y-1 text-center">
                <p>Time Sheet Pending</p>
                <p className="text-xs">
                  For Invoice <span className="text-blue-500">#INV-369</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs">11:23am</p>
                <p className="text-sm">11-sep-2023</p>
              </div>
            </div>
            <div
              className=" text-gray-500 flex justify-between items-center p-3"
              role="none"
            >
              <div className="bg-red-200 h-10 w-10 rounded-full flex justify-center items-center">
                <CalendarTodayOutlinedIcon
                  style={{ fontSize: 20 }}
                  className="text-red-600"
                />
              </div>
              <div className="space-y-1 text-center">
                <p>Time Sheet Deleted</p>
                <p className="text-xs">
                  For Invoice <span className="text-blue-500">#INV-369</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs">11:23am</p>
                <p className="text-sm">11-sep-2023</p>
              </div>
            </div>
          </div>
          <div className="py-1.5" role="none">
            <div className="flex items-center px-3.5 justify-center">
              <a className="block px-3.5 py-1.5 text-blue-500">View All</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
