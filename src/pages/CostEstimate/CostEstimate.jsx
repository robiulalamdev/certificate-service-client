/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "../../styles/costEstimate.css";
import { iCloseMailModal, iInfo } from "../../utiles/icons";

const CostEstimate = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <div className="container">
      {step === 1 && (
        <>
          <h1 className="cost_estimate_title">
            Please fill out the fields below to get an estimate of what your
            mailing project will cost.
          </h1>

          <div className="cost_estimate_container">
            <div className="cost_estimate_list_container">
              <h1>
                1. How many PAGES are in the document(s) you intend to upload?
              </h1>
              <div
                className="flex items-center"
                style={{ gap: "16px", maxWidth: "fit-content" }}
              >
                <input className="" type="number" />
                <div>{iInfo}</div>
              </div>
            </div>
            <div className="cost_estimate_list_container">
              <h1>2. How many parties will be receiving your documents?</h1>
              <div
                className="flex items-center"
                style={{ gap: "16px", maxWidth: "fit-content" }}
              >
                <input className="" type="number" />
                <div>{iInfo}</div>
              </div>
            </div>
            <div className="cost_estimate_list_container">
              <h1>3. We will print on both sides of the sheet.</h1>
              <div
                className="flex items-center"
                style={{ gap: "16px", maxWidth: "fit-content" }}
              >
                <input className="" type="number" />
                <div>{iInfo}</div>
              </div>
            </div>
            <div className="cost_estimate_list_container">
              <h1>4. We will print your documents 1 page per side.</h1>
              <div
                className="flex items-center"
                style={{ gap: "16px", maxWidth: "fit-content" }}
              >
                <input className="" type="number" />
                <div style={{ opacity: "0" }}>{iInfo}</div>
              </div>
            </div>
          </div>
          <div className="get_estimate_btn_container">
            <button onClick={() => setStep(2)} className="get_estimate_btn">
              Get Estimate!
            </button>
            <p onClick={() => setOpen(true)}>Disclaimer & Use Agreement:</p>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="cost_estimate_result_section">
          <h1 className="">Result</h1>

          <p>
            Print rate charge includes (1) the preparation and printing of the
            documents for mailing, (2) the preparation and printing of the
            necessary envelopes for the mailing, (3) the folding and insertion
            of the documents into the envelope, (4) the sealing of the envelope,
            (5) the affixing of the proper first class postage on the envelope,
            (6) pre-sorting the envelopes for delivery to the USPS - Business
            Mail Entry Unit, and (7) the preparation and electronic delivery of
            our proof of service document for filing on Pacer/ECF.
          </p>

          <div className="cost_estimate_result_table">
            <div className="single_table">
              <h4>Date and Time:</h4>
              <h6>Sat Dec 09 2023 00:03:47 GMT+06</h6>
            </div>
            <div className="single_table">
              <h4>Total Pages to Print:</h4>
              <h6>150</h6>
            </div>
            <div className="single_table">
              <h4>Sheets Per Envelope:</h4>
              <h6>1.5</h6>
            </div>
            <div className="single_table">
              <h4>First Class Postage Rate:</h4>
              <h6>$0.6</h6>
            </div>
            <div className="single_table">
              <h4>Print Rate:</h4>
              <h6>$0.17</h6>
            </div>
            <div className="single_table">
              <h4>Printing Cost:</h4>
              <h6>$25.500000000000004</h6>
            </div>
            <div className="single_table mb-1">
              <h4>Postage Cost:</h4>
              <h6>$30</h6>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1243 12"
              fill="none"
            >
              <path
                d="M10 5L0 0.226497V11.7735L10 7V5ZM1233 7L1243 11.7735V0.226497L1233 5V7ZM9 7H1234V5H9V7Z"
                fill="black"
              />
            </svg>
            <div className="single_table">
              <h4>Total Cost:</h4>
              <h6>$55.5</h6>
            </div>
          </div>

          <button className="print_this_estimate_btn">
            Print This Estimate
          </button>
        </div>
      )}

      {/* <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="user_agreement_modal"
      >
        <div
          onClick={() => setOpen(false)}
          className=""
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            cursor: "pointer",
          }}
        >
          {iCloseMailModal}
        </div>
        <div className="user_agreement_modal">
          <h6>
            By clicking on the 'Get Estimate' button below, you (hereafter
            "User") agree to the following terms and conditions.
          </h6>

          <p>
            This quote is for estimation purposes and is not a guarantee of cost
            for services. Quote is based on current information from User about
            the mailing project requirements. It does not constitute a review by
            BK Attorney Services, LLC for pricing on the actual cost of mailing
            a particular project. Many factors may or may not be known at the
            time of obtaining the estimate. Changes in addresses, changes in
            documents, international mail costs and other factors all influence
            the final cost of the service. Your usage of this estimation tool is
            at your own risk.{" "}
          </p>

          <p>
            BK Attorney Services, LLC in no way warranties or guarantees the
            accuracy of the cost estimator. Actual cost may change once project
            elements are finalized and submitted. BK Attorney Services, LLC is
            not bound by the Mailing Project Job Cost Estimator system. This
            feature is provided solely as a marketing tool to provide an
            approximate cost for potential mailing projects and is not intended
            to be binding in anyway on User or BK Attorney Services, LLC. Rush
            jobs are billed at twenty five cents per page with no discounts for
            postage or volume. If you have a Rush Job or Certified Mailing Job
            and need an estimate, please contact us directly at 509 412 1356.
          </p>

          <p>
            We will be happy to provide you with a quote at no charge. This
            estimate program assumes you have a Postal Acknowledgment Form (PAF)
            on file with us and that you are a registered user. If you need to
            fill out a PAF form in order to get your discounted postage rate,{" "}
            <a
              href="http://www.bkattorneyservices3.com/bkasmailform_020.htm"
              target="_blank"
            >
              click here.
            </a>{" "}
          </p>
        </div>
      </Modal> */}
    </div>
  );
};

export default CostEstimate;
