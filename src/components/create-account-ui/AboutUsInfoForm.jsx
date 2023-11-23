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
  business_category: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .nullable()
    .required("Business Category is required"),
});

const AboutUsInfoForm = ({ formStep, setFormStep }) => {
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
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`${formStep === 6 ? "d-block" : "d-none"}
      row
      `}
    >
      <div className="ca_input_container">
        <label htmlFor="please_select_below">Please select below:</label>
        <Select
          {...register("please_select_below")}
          onChange={setSelectedOption}
          className="ca_input w-100"
          options={options}
        />
      </div>
      <div className="ca_input_container">
        <label htmlFor="please_select_below">
          If there is someone we should thank for referring you to us, please
          let us know their name!
        </label>
        <textarea
          {...register("about")}
          className="ca_input w-100"
          type="text"
          style={{ minHeight: "177.193px" }}
        />
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button type="submit" className="next_btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default AboutUsInfoForm;
