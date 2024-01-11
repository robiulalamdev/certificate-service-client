/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

const options = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
  // Add more categories as needed
];

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email_address: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  cell_Phone: yup
    .string()
    .matches(/^\d+$/, "Cell Phone must be a number")
    .required("Cell Phone is required"),
  business_category: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .nullable()
    .required("Business Category is required"),
  direct_office_phone: yup.string().required("Direct Office Phone is required"),
  ext: yup.string(),
  // Add more fields as needed
});

const AccountContactInfoForm = ({ formStep, setFormStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [agre, setAgre] = useState(false);

  const handleForm = (data) => {
    setFormStep(formStep + 1);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`${formStep === 2 ? "d-block" : "d-none"}
      row
      `}
    >
      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="first_name">First Name</label>
          <input
            {...register("first_name")}
            className="ca_input w-full"
            type="text"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="last_name">Last Name</label>
          <input
            {...register("last_name")}
            className="ca_input w-full"
            type="text"
          />
        </div>
      </div>

      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="email_address">E-mail Address</label>
          <input
            {...register("email_address")}
            className="ca_input w-full"
            type="email"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="cell_Phone">Cell Phone</label>
          <input
            {...register("cell_Phone")}
            className="ca_input w-full"
            type="number"
          />
        </div>
      </div>
      <div className="ca_input_container">
        <label htmlFor="business_category">Business Category</label>
        <Select
          {...register("business_category")}
          onChange={setSelectedOption}
          className="ca_input w-full"
          options={options}
        />
      </div>
      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="direct_office_phone">Direct Office Phone</label>
          <input
            {...register("direct_office_phone")}
            className="ca_input w-full"
            type="text"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="ext">EXT.</label>
          <input {...register("ext")} className="ca_input w-full" type="text" />
        </div>
      </div>
      <div
        onClick={() => setAgre(!agre)}
        className="cursor-pointer flex items-center gap-2 mt-4"
      >
        <input className="ca_agre_input" type="checkbox" checked={agre} />
        <p className="ca_agre">
          Check this box if we can send you text alerts about your mailing
          projects
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <button type="submit" className="next_btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default AccountContactInfoForm;
