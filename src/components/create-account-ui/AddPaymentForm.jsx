/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

const options = [
  { value: "california", label: "California" },
  { value: "new-york", label: "New York" },
  { value: "texas", label: "Texas" },
];

const schema = yup.object().shape({
  coupon_code: yup.string().required("First Name is required"),
});

const AddPaymentForm = ({ formStep, setFormStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleForm = (data) => {
    setFormStep(formStep + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`${formStep === 4 ? "d-block" : "d-none"}
      row
      `}
    >
      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="name_card">Name on Card</label>
          <input
            {...register("name_card")}
            className="ca_input w-full"
            type="text"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="billing_phone">Billing Phone</label>
          <input
            {...register("billing_phone")}
            className="ca_input w-full"
            type="text"
          />
        </div>
      </div>
      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="billing_address_number">Billing Address Number</label>
          <input
            {...register("billing_address_number")}
            className="ca_input w-full"
            type="number"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="billing_zip_code">Billing Zip Code</label>
          <input
            {...register("billing_zip_code")}
            className="ca_input w-full"
            style={{ maxWidth: "278px" }}
            type="text"
          />
        </div>
      </div>
      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="billing_zip_code">Billing Zip Code</label>
          <input
            {...register("billing_zip_code")}
            className="ca_input w-full"
            type="number"
          />
        </div>
        <div
          className="ca_input_container col-md-6 pe-0"
          style={{ maxWidth: "371px" }}
        >
          <label htmlFor="credit_card_type">Credit Card Type</label>
          <Select
            {...register("credit_card_type")}
            onChange={setSelectedOption}
            className="ca_input"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                border: "transparent",
                outlineColor: state.isFocused && "transparent",
                backgroundColor: "transparent",
              }),
            }}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <div className="ca_input_container">
          <label htmlFor="expiration_date">Expiration Date</label>
          <div className="flex gap-3">
            <input
              {...register("expiration_date")}
              className="ca_input w-full"
              type="date"
              style={{ maxWidth: "115px" }}
            />
            <input
              {...register("month")}
              className="ca_input w-full"
              type="month"
              style={{ maxWidth: "115px" }}
            />
          </div>
        </div>
        <div className="ca_input_container flex-grow w-full">
          <label htmlFor="ccs_csv_security_code">CCS/CSV Security Code</label>
          <input
            {...register("ccs_csv_security_code")}
            className="ca_input w-full"
            type="text"
            style={{ maxWidth: "486px" }}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button type="submit" className="next_btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default AddPaymentForm;
