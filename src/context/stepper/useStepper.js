import { useContext } from "react";
import StepperContext from "./StepperContext";

const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) return null;
  return context;
};

export default useStepper;
