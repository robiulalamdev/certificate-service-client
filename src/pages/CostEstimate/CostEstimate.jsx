import React from "react";
import "../../styles/costEstimate.css";
import { iInfo } from "../../utiles/icons";

const CostEstimate = () => {
  return (
    <div className="container">
      <h1 className="cost_estimate_title">
        Please fill out the fields below to get an estimate of what your mailing
        project will cost.
      </h1>

      <div className="cost_estimate_container">
        <div className="cost_estimate_list_container">
          <h1>
            1. How many PAGES are in the document(s) you intend to upload?
          </h1>
          <div
            className="d-flex align-items-center"
            style={{ gap: "16px", maxWidth: "fit-content" }}
          >
            <input className="" type="number" />
            <div>{iInfo}</div>
          </div>
        </div>
        <div className="cost_estimate_list_container">
          <h1>2. How many parties will be receiving your documents?</h1>
          <div
            className="d-flex align-items-center"
            style={{ gap: "16px", maxWidth: "fit-content" }}
          >
            <input className="" type="number" />
            <div>{iInfo}</div>
          </div>
        </div>
        <div className="cost_estimate_list_container">
          <h1>3. We will print on both sides of the sheet.</h1>
          <div
            className="d-flex align-items-center"
            style={{ gap: "16px", maxWidth: "fit-content" }}
          >
            <input className="" type="number" />
            <div>{iInfo}</div>
          </div>
        </div>
        <div className="cost_estimate_list_container">
          <h1>4. We will print your documents 1 page per side.</h1>
          <div
            className="d-flex align-items-center"
            style={{ gap: "16px", maxWidth: "fit-content" }}
          >
            <input className="" type="number" />
            <div style={{ opacity: "0" }}>{iInfo}</div>
          </div>
        </div>
      </div>
      <div className="get_estimate_btn_container">
        <button className="get_estimate_btn">Get Estimate!</button>
        <p>Disclaimer & Use Agreement:</p>
      </div>
    </div>
  );
};

export default CostEstimate;
