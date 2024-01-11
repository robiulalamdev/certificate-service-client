import React, { useState } from "react";
import SMFStep1 from "../../components/start-mailing-forms/SMFStep1";
import "../../styles/startMailingForm.css";
import SMFStep2 from "../../components/start-mailing-forms/SMFStep2";
import SMFStep3 from "../../components/start-mailing-forms/SMFStep3";
import SMFStep4 from "../../components/start-mailing-forms/SMFStep4";
import SMFStep5 from "../../components/start-mailing-forms/SMFStep5";

const StartMailingForm = () => {
  // const [step, setStep] = useState(1);
  return (
    <div className="container mx-auto pb-5" style={{ minHeight: "100vh" }}>
      {/* {step > 1 && (
        <div
          className="flex justify-end"
          style={{ marginTop: "37px" }}
        >
          <div className="smf1_cancel_upload_btn">Cancel Upload</div>
        </div>
      )} */}
      <form className="grid grid-cols-1 gap-y-[60px]">
        {/* <SMFStep1 />
        <SMFStep2 />
        <SMFStep3 />
        <SMFStep4 /> */}
        <SMFStep5 />
      </form>

      <div className="flex items-center justify-center w-full">
        <button className="smf_btn">Submit</button>
        {/* {step === 11 ? (
          <button className="smf_btn">Submit</button>
        ) : (
          <div onClick={() => setStep(step + 1)} className="smf_btn">
            Next
          </div>
        )} */}
      </div>
    </div>
  );
};

export default StartMailingForm;
