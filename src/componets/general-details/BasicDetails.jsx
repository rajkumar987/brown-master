import React from "react";
import { useForm } from "react-hook-form";
import useFormValues from "../../context/form/useFormValues";

const BasicDetails = ({ handleChange }) => {
  const { formValues, setFormValues } = useFormValues();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: formValues });

  const onSubmit = (data) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    handleChange("contactDetails");
  };
  return (
    <form
      className="bg-white shadow-md rounded-md w-full p-5 border relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-base  leading-6 text-gray-900">Basic Details</h3>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-3 py-6">
        <div className="relative">
          <input
            type="text"
            id="firstName"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
            placeholder=" "
            {...register("firstName", { required: true })}
          />
          <label
            htmlFor="firstName"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            First Name
          </label>
          {errors.firstName && (
            <p className="text-red-500 text-xs px-1 py-2">
              This field is required
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="Date"
            id="dateOfBirth"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
            placeholder=" "
            {...register("dateOfBirth", { required: true })}
          />
          <label
            htmlFor="dateOfBirth"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Date of Birth
          </label>
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs px-1 py-2">
              This field is required
            </p>
          )}
        </div>
      </div>
      <button
        className="bg-blue-600 text-gray-50/90 px-4 py-1.5 rounded-lg absolute -bottom-16 right-0"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default BasicDetails;
