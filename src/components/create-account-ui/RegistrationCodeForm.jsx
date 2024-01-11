/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

const schema = yup.object().shape({
  coupon_code: yup.string().required("First Name is required"),
});

const RegistrationCodeForm = ({ formStep, setFormStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setFormStep(formStep + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`${formStep === 3 ? "d-block" : "d-none"}
      row
      `}
    >
      <div className="ca_input_container w-full flex flex-col items-center">
        <label className="text-center" htmlFor="coupon_code">
          Registration / Coupon Code
        </label>
        <input
          {...register("coupon_code")}
          className="ca_input w-full mx-auto"
          style={{ maxWidth: "374px" }}
          type="text"
        />
      </div>

      <div className="flex justify-center mt-5">
        <button type="submit" className="next_btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default RegistrationCodeForm;
