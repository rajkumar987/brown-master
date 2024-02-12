import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";

const TabsList = [
  {
    name: "Basic Details",
    key: "basicDetails",
    component: BasicDetails, // Removed JSX
  },
  {
    name: "Contact Details",
    key: "contactDetails",
    component: ContactDetails, // Removed JSX
  },
];

const GeneralDetails = () => {
  const [currentTab, setCurrentTab] = useState(TabsList[0]);

  const handleChange = (key) => {
    const tab = TabsList.find((each) => each.key === key);
    setCurrentTab(tab);
  };

  const TabComponent = currentTab?.component;

  return (
    <div className="flex flex-col justify-center md:items-center p-5 gap-20">
      <div className="md:w-2/6 rounded-full flex items-center justify-around gap-2 ">
        {TabsList.map((tab) => (
          <div
            key={tab.key}
            className={`h-0.5 w-1/2 rounded-full ease-in duration-300 ${
              currentTab?.key === tab.key ? "bg-blue-600" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>

      <div className="ease-in duration-500  md:w-1/2 ">
        <TabComponent handleChange={handleChange} />
      </div>
    </div>
  );
};

export default GeneralDetails;
