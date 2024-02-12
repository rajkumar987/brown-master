import { useState } from "react";
import { stepperList } from "../../constants/stepperList";
import StepperContext from "./StepperContext";

const StepperContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(stepperList[0].key);
  const [completedSteps, setCompletedSteps] = useState(0);

  return (
    <StepperContext.Provider
      value={{ currentStep, setCurrentStep, completedSteps, setCompletedSteps }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export default StepperContextProvider;
