import React from "react";
import { useForm } from "react-hook-form";
import useFormValues from "../../context/form/useFormValues";
import useStepper from "../../context/stepper/useStepper";
const ContactDetails = ({ handleChange }) => {
  const { formValues, setFormValues } = useFormValues();
  const { setCurrentStep, setCompletedSteps } = useStepper();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: formValues });

  const onSubmit = (data) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    setCurrentStep("address");
    setCompletedSteps(1);
  };
  return (
    <form
      className="bg-white shadow-md rounded-md w-full p-5 border relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-base  leading-6 text-gray-900">Contact Details</h3>
      <div className="grid md:grid-cols-2 gap-3 py-6">
        <div className="relative">
          <input
            type="text"
            id="email_id"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
            placeholder=" "
            {...register("email_id", { required: true })}
          />
          <label
            htmlFor="email_id"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email Id
          </label>
          {errors.email_id && (
            <p className="text-red-500 text-xs px-1 py-2">
              This field is required
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="number"
            id="mobile_number"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
            placeholder=" "
            {...register("mobile_number", { required: true })}
          />
          <label
            htmlFor="mobile_number"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Mobile Number
          </label>
          {errors.mobile_number && (
            <p className="text-red-500 text-xs px-1 py-2">
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className="absolute -bottom-16 right-0 flex gap-3">
        <button
          className="bg-gray-400 text-gray-50/90 px-4 py-1.5 rounded-lg"
          onClick={() => handleChange("basicDetails")}
        >
          Previous
        </button>

        <button
          className="bg-blue-600 text-gray-50/90 px-4 py-1.5 rounded-lg "
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ContactDetails;
