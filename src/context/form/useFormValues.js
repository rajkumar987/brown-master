import { useContext, createContext } from "react";

export const FormContext = createContext();

const useFormValues = () => {
  const context = useContext(FormContext);
  if (!context) return null;
  return context;
};
export default useFormValues;
