import React, { useState } from "react";
import SelectDropdown from "../commons/SelectDropdown";
import { iInfo } from "../../utiles/icons";

const SMFStep1 = () => {
  const [district, setDistrict] = useState("");
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
          <SelectDropdown
            selected={district}
            setSelected={setDistrict}
            items={["CALIFORNIA"]}
            className="smf_dropdown_btn w331"
          />
        </div>
        <div className="smf_input_container">
          <h1>DISTRICT OF</h1>
          <SelectDropdown
            selected={district}
            setSelected={setDistrict}
            items={["CALIFORNIA"]}
            className="smf_dropdown_btn w331"
          />
        </div>
        <div className="smf_input_container">
          <h1>DIVISION</h1>
          <input type="text" className="w331" />
        </div>
      </div>

      <div className="">
        <h1 className="inre_title">
          IN RE: <span>(Required)*</span>
        </h1>
        <div className="inre_inputes">
          <div className="smf_input_container">
            <h1>DebtorName</h1>
            <input type="text" />
          </div>
          <div className="smf_input_container">
            <h1>JointDebtorName</h1>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="inre_title">CASE NUBER:</h1>
        <div className="inre_inputes">
          <div className="smf_input_container">
            <h1>IF APPLICABLE</h1>
            <input type="text" />
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
              {/* <UncontrolledPopover
                placement="bottom"
                target="PopoverFocus"
                trigger="focus"
              >
                <PopoverBody>
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
                </PopoverBody>
              </UncontrolledPopover> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep1;
