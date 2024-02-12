import React, { useState } from "react";
import { FormContext } from "./useFormValues";

const FormContextProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});
  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
