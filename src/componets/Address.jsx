import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import useFormValues from "../context/form/useFormValues";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import useStepper from "../context/stepper/useStepper";
import RemoveIcon from "@mui/icons-material/Remove";

const Address = () => {
  const { formValues, setFormValues } = useFormValues();
  const { setCurrentStep, setCompletedSteps } = useStepper();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: [{ addressline1: null, addressline2: null }],
    },
  });

  const onSubmit = (data) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    setCurrentStep("paymentConfiguration");
    setCompletedSteps(2);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
  });
  return (
    <div className="flex flex-col justify-center md:items-center p-5 gap-20">
      <div className="ease-in duration-500  md:w-1/2 ">
        <form
          className="bg-white shadow-md rounded-md w-full p-5 border relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-base  leading-6 text-gray-900">Address</h3>

          <ul className="py-6">
            {fields.map((field, index) => {
              return (
                <li className="grid md:grid-cols-11 gap-3  my-4 relative">
                  <div className="relative col-span-5">
                    <input
                      type="text"
                      id={`address${index}addressline1`}
                      className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
                      placeholder=" "
                      {...register(`address.${index}.addressline1`, {
                        required: index > 0 ? false : true,
                      })}
                    />
                    <label
                      htmlFor={`address${index}addressline1`}
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-4 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Address Line 1
                    </label>
                    {index == 0 && errors?.address?.[0].addressline1 && (
                      <p className="text-red-500 text-xs px-1 py-2">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="relative col-span-5">
                    <input
                      type="text"
                      id={`address${index}addressline2`}
                      className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer"
                      placeholder=" "
                      {...register(`address.${index}.addressline2`, {
                        required: index > 0 ? false : true,
                      })}
                    />
                    <label
                      htmlFor={`address${index}addressline2`}
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-4 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Address Line 2
                    </label>
                    {index == 0 && errors?.address?.[0].addressline2 && (
                      <p className="text-red-500 text-xs px-1 py-2">
                        This field is required
                      </p>
                    )}
                  </div>

                  {index < fields.length - 1 ? (
                    <div
                      className="col-span-1 text-center transform translate-y-3 cursor-pointer"
                      onClick={() => remove(index)}
                    >
                      <RemoveIcon />
                    </div>
                  ) : (
                    <div
                      className="col-span-1 text-center transform translate-y-3 cursor-pointer"
                      onClick={() => append()}
                    >
                      <AddOutlinedIcon />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className="bg-blue-600 text-gray-50/90 px-4 py-1.5 rounded-lg absolute -bottom-16 right-0"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
