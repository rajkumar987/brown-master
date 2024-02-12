import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import useFormValues from "../context/form/useFormValues";
import useStepper from "../context/stepper/useStepper";
import Select from "react-select";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Options = [
  { value: "ravi", label: "Ravi" },
  { value: "ram", label: "Ram" },
  { value: "vishalraj", label: "Vishal Raj" },
  { value: "abhi", label: "Abhi" },
  { value: "rahulraj", label: "Rahul Raj" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PayConfig = () => {
  const { setFormValues } = useFormValues();
  const { setCompletedSteps } = useStepper();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      levelApprovals: [Options[0]],
    },
  });

  const onSubmit = (data) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    setCompletedSteps(3);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const { fields, append } = useFieldArray({
    control,
    name: "levelApprovals",
  });

  return (
    <div className="flex flex-col justify-center md:items-center p-5 gap-20">
      <div className="ease-in duration-500  md:w-1/2 ">
        <form
          className="bg-white shadow-md rounded-md w-full p-5 border relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-base  leading-6 text-gray-900">
            Pay Configuration
          </h3>
          <div className="grid grid-cols-1 gap-3 py-8">
            {fields.map((item, index) => {
              return (
                <div className="relative" key={item.id}>
                  <Controller
                    defaultValue={Options[0]}
                    rules={{
                      required: index > 0 ? false : true,
                    }}
                    render={({ field: { onChange, value, ref } }) => {
                      return (
                        <Select
                          defaultValue={Options[0]}
                          onChange={(e) => onChange(e)}
                          isClearable={false}
                          ref={ref}
                          isMulti
                          options={Options}
                          value={value}
                          placeholder=""
                          components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator: () => null,
                          }}
                          classNames={{
                            control: () =>
                              "block rounded-lg pb-1 block rounded-lg  pt-4 w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer w-full text-sm text-gray-900  border appearance-none  focus:outline-none  peer",
                          }}
                        />
                      );
                    }}
                    name={`levelApprovals.${index}`}
                    control={control}
                  />
                  <label
                    htmlFor="levelApprovals"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-5 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
                  >
                    Level {index + 1} Approvers
                  </label>
                  {index == 0 && errors.levelApprovals && (
                    <p className="text-red-500 text-xs px-1 py-2">
                      This field is required
                    </p>
                  )}
                </div>
              );
            })}

            <div
              className={`flex justify-center items-center bg-blue-100/50 py-2 rounded-md text-sm text-blue-600 ${
                fields.length < 5 ? "cursor-pointer" : "cursor-not-allowed"
              } `}
              onClick={() => {
                if (fields.length < 5) {
                  append(Options[0]);
                }
              }}
            >
              Add New Level
            </div>
          </div>
          <button
            className="bg-blue-600 text-gray-50/90 px-4 py-1.5 rounded-lg absolute -bottom-16 right-0"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
      <Dialog
        fullWidth={true}
        open={open}
        TransitionComponent={Transition}
        maxWidth={"xs"}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="rounded overflow-hidden shadow-lg py-10 flex justify-center flex-col items-center">
          <img
            src="/success.png"
            alt="Sunset in the mountains"
            className="mx-auto"
          />
          <div className="px-6 py-4 flex flex-col items-center">
            <div className="font-medium tracking-wide text-lg mb-2 text-green-700">
              Congratulations
            </div>
            <p className="text-gray-700 text-sm">
              Invite Link Successfully sent to Raj
            </p>
          </div>
          <div className="px-6 pt-4 mx-auto">
            <button
              className="bg-blue-500 text-gray-50/90 px-4 py-1.5 rounded-lg mx-auto cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Next
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PayConfig;
