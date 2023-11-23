/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

const schema = yup.object().shape({
  company_name: yup.string().required("Company Name is required"),
  address: yup.string().required("Address is required"),
  address_cont: yup.string(),
  city: yup.string().required("City is required"),
  state: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .nullable()
    .required("State is required"),
  zip: yup.string().required("ZIP is required"),
  main_office_phone: yup.string().required("Main Office Phone is required"),
  fax: yup.string().required("Fax is required"),
  web_site_url_address: yup
    .string()
    .url("Invalid URL format")
    .required("Web site URL address is required"),
});

const OrganizationInfoForm = ({ formStep, setFormStep }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleForm = (data) => {
    setFormStep(formStep + 1);
    console.log(data);
  };

  const options = [
    { value: "california", label: "California" },
    { value: "new-york", label: "New York" },
    { value: "texas", label: "Texas" },
  ];
  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`${formStep === 1 ? "d-block" : "d-none"}
      row
      `}
    >
      <div className="ca_input_container">
        <label htmlFor="company_name">Company Name</label>
        <input
          {...register("company_name")}
          className="ca_input w-100"
          name="company_name"
          type="text"
        />
      </div>
      <div className="ca_input_container">
        <label htmlFor="address">Address</label>
        <input
          {...register("address")}
          className="ca_input w-100"
          type="text"
        />
      </div>
      <div className="ca_input_container">
        <label htmlFor="address_cont">Address (cont.)</label>
        <input
          {...register("address_cont")}
          className="ca_input w-100"
          type="text"
        />
      </div>

      <div className="row w-100 pe-0">
        <div className="ca_input_container col-12 col-md-4 pe-0">
          <label htmlFor="city">city</label>
          <input {...register("city")} className="ca_input w-100" type="text" />
        </div>
        <div className="ca_input_container col-12 col-md-4 pe-0">
          <label htmlFor="state">State</label>
          <Select
            {...register("state")}
            onChange={setSelectedOption}
            className="ca_input w-100"
            options={options}
          />
        </div>
        <div className="ca_input_container col-12 col-md-4 pe-0">
          <label htmlFor="zip">Zip</label>
          <input {...register("zip")} className="ca_input w-100" type="text" />
        </div>
      </div>

      <div className="row pe-0">
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="main_office_phone">Main Office Phone</label>
          <input
            {...register("main_office_phone")}
            className="ca_input w-100"
            type="text"
          />
        </div>
        <div className="ca_input_container col-md-6 pe-0">
          <label htmlFor="fax">Fax</label>
          <input {...register("fax")} className="ca_input w-100" type="text" />
        </div>
      </div>
      <div className="ca_input_container">
        <label htmlFor="web_site_url_address">Web site URL address</label>
        <input
          {...register("web_site_url_address")}
          className="ca_input w-100"
          type="url"
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

export default OrganizationInfoForm;
