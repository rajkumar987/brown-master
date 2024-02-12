import React from "react";
import { stepperList } from "../constants/stepperList";
import useStepper from "../context/stepper/useStepper";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Stepper = () => {
  const { currentStep, completedSteps } = useStepper();
  return (
    <div className="mx-4 p-4 w-full ">
      <div className="flex items-center font-extralight">
        {stepperList.map((stepper, index) => {
          return (
            <>
              <div className="flex items-center  relative gap-2">
                <div
                  className={`rounded-full transition duration-500 ease-in-out h-5 w-5  border relative ${
                    index < completedSteps && "bg-blue-600"
                  } ${
                    currentStep == stepper.key
                      ? "border-blue-600"
                      : "border-gray-400"
                  } `}
                >
                  {currentStep == stepper.key && (
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 "></div>
                  )}
                  {index < completedSteps && (
                    <DoneOutlinedIcon
                      className="text-white absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 font-boldm"
                      style={{ fontSize: 16 }}
                    />
                  )}
                </div>
                <div className=" text-center text-xs lg:text-sm">
                  {stepper.name}
                </div>
              </div>
              {index < stepperList.length - 1 && (
                <div
                  className={`flex-auto border-t-2 transition duration-500 ease-in-out mx-2 ${
                    index < completedSteps && "border-blue-500"
                  }`}
                ></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
