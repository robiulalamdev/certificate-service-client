/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectDropdown from "../commons/SelectDropdown";
import { iInfo } from "../../utiles/icons";
import { Controller } from "react-hook-form";

const SMFStep1 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  return (
    <div>
      <h1 className="smf1_sm_title">
        Please fill out the form below to upload your documents for mailing. We
        will mail the documents you attach to the addresses you provide.
      </h1>
      <h1 className="smf1_title">
        EFFECTIVE 3/15/2023: YOU ARE RESPONSIBLE FOR GENERATING YOUR OWN
        CERTIFICATE OF SERVICE PURSUANT TO LOCAL RULES!!!
      </h1>

      <div className="smf1_tell_about">
        <h1>
          Tell us about the documents you would like us to mail on your behalf
          today!
        </h1>
        <div className="smf1_estimate_cancel_btns">
          <div className="get_a_cost_estimate_btn">Get a cost estimate</div>
          <div className="smf1_cancel_upload_btn">Cancel Upload</div>
        </div>
      </div>

      <div className="smf_first_container">
        <div className="smf_input_container">
          <h1>usa BANKRUPTCY COURT</h1>
          <Controller
            name="about_document.usa_bankruptcy_court"
            control={control}
            render={({ field }) => (
              <SelectDropdown
                selected={watch("about_document.usa_bankruptcy_court")}
                setSelected={(selected) => {
                  field.onChange(selected);
                }}
                items={["CALIFORNIA"]}
                className={`smf_dropdown_btn w331 ${
                  errors.about_document?.usa_bankruptcy_court &&
                  "!border !border-red-600"
                }`}
              />
            )}
            {...register("about_document.usa_bankruptcy_court", {
              required: false,
            })}
          />
        </div>
        <div className="smf_input_container">
          <h1>DISTRICT OF</h1>
          <Controller
            name="about_document.district_of"
            control={control}
            render={({ field }) => (
              <SelectDropdown
                selected={watch("about_document.district_of")}
                setSelected={(selected) => {
                  field.onChange(selected);
                }}
                items={["CALIFORNIA"]}
                className="smf_dropdown_btn w331"
              />
            )}
            {...register("about_document.district_of", { required: false })}
          />
        </div>
        <div className="smf_input_container">
          <h1>DIVISION</h1>
          <input
            {...register("about_document.division", { required: false })}
            type="text"
            className="w331"
          />
        </div>
      </div>

      <div className="">
        <h1 className="inre_title">
          IN RE: <span>(Required)*</span>
        </h1>
        <div className="inre_inputes">
          <div className="smf_input_container">
            <h1>DebtorName</h1>
            <input
              {...register("about_document.debtor_name", { required: true })}
              type="text"
              required
            />
          </div>
          <div className="smf_input_container">
            <h1>JointDebtorName</h1>
            <input
              {...register("about_document.joint_debtor_name", {
                required: false,
              })}
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="inre_title">CASE NUBER:</h1>
        <div className="inre_inputes">
          <div className="smf_input_container">
            <h1>IF APPLICABLE</h1>
            <input
              {...register("about_document.if_applicable", { required: false })}
              type="text"
            />
          </div>
          <div className="smf_input_container">
            <h1 style={{ opacity: "0" }}>.</h1>
            <div className="join_case_container">
              <button className="jc_btn" type="button">
                Joint case?
              </button>
              <button id="PopoverFocus" type="button">
                {iInfo}
              </button>
              {/* <div target="PopoverFocus">
                <div>
                  If you have a joint case number in addition to the main case
                  number. . . Put the main case number first. Please separate
                  the case numbers with a comma (,). If you ask us to download
                  the ECF Master Mailing Matrix, we will download the matrix for
                  EACH case listed, unless you tell us specifically in the
                  Custom work Request section to only pull the ECF Matrix for a
                  particular case number. Please detail for us explicitly who
                  you would like us to mail your documents to in the special
                  instructions if you do not want us to mail to the MML for each
                  case number listed.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep1;
