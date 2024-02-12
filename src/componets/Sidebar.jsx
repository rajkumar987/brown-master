import React, { useState, useEffect, useRef } from "react";
import { navlist } from "../constants/navitems";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [expanded, setExpanded] = useState(false);
  const [expandedChilds, setExpandedChilds] = useState({});

  const sectionRef = useRef(null);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (sectionRef.current) {
      const sidebarHeight = document.getElementById("sidebar").clientHeight;
      const stickyHeight = document.getElementById("sticky").clientHeight;
      const sectionHeight = sidebarHeight - stickyHeight;
      sectionRef.current.style.height = `${sectionHeight}px`;
    }
  }, []);

  const handleParentClick = (child) => {
    setActiveNav(child.childs ? child.childs[0].name : child.name);

    setExpandedChilds((prevExpandedChilds) => ({
      ...prevExpandedChilds,
      [child.name]: !prevExpandedChilds[child.name],
    }));
  };

  const handleSubchildClick = (subchild) => {
    setActiveNav(subchild.name);
  };

  return (
    <div
      id="sidebar"
      className={`shadow-xl absolute h-screen bg-white z-10 each-in duration-100 hidden md:block ${
        expanded ? "w-64" : "w-24"
      }`}
    >
      <nav className="bg-white relative">
        <div id="sticky" className="p-3 sticky top-0 bg-white z-20">
          <a href="#" className="flex justify-center items-center">
            <img
              src={expanded ? "/logo-name.svg" : "/logo-icon.png"}
              alt="logo"
            />
          </a>
          <div className="w-5 h-5 flex justify-center items-center absolute bg-slate-300 rounded-full right-1 transform translate-x-1/2">
            {expanded ? (
              <ChevronLeftIcon onClick={toggleSidebar} />
            ) : (
              <ChevronRightIcon onClick={toggleSidebar} />
            )}
          </div>
        </div>
        <section
          ref={sectionRef}
          className="divide-y-2 px-3 text-sm font-light pt-5 w-full overflow-y-scroll h-1/4"
        >
          {navlist?.map((navitem) => (
            <div key={navitem.name} className="flex flex-col py-1">
              {navitem.childs?.map((child) => (
                <div key={child.name}>
                  <div
                    className={`flex  justify-between gap-3 my-1 mx-1 px-5 py-3 rounded-md cursor-pointer ${
                      activeNav === child.name &&
                      "bg-blue-600/95 text-white shadow-lg"
                    }`}
                    onClick={() => handleParentClick(child)}
                  >
                    <div className="flex gap-3 items-center">
                      {React.createElement(child.icon)}
                      {expanded && <p>{child.name}</p>}
                    </div>
                    {child.childs && expanded && (
                      <div>
                        {expandedChilds[child.name] ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                    )}
                  </div>
                  {expandedChilds[child.name] && expanded && child.childs && (
                    <div className="ml-6 border-l border-blue-600 py-2">
                      {child.childs?.map((subchild, index) => (
                        <div
                          key={index}
                          className={` ml-3 py-2 mb-1 pl-3 rounded-md cursor-pointer ${
                            activeNav === subchild.name &&
                            "bg-blue-500/95 text-white shadow-lg"
                          }`}
                          onClick={() => handleSubchildClick(subchild)}
                        >
                          {subchild.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      </nav>
    </div>
  );
};

export default Sidebar;
