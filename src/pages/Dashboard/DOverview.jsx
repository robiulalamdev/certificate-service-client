/* eslint-disable react/no-unknown-property */
import React from "react";
import "../../styles/dashboard/dashboard.css";
import "../../styles/dashboard/dOverview.css";
import OverviewNotifyUser from "../../components/dashboard-ui/overview-ui/OverviewNotifyUser";
import { iJob1, iJob2, iJob3 } from "../../utiles/icons";

const t1 = "<Number for their job>";
const fromInvoice = "<Data from invoice>";

const DOverview = () => {
  return (
    <div className="dashboard_overview">
      <div className="overview_first_half">
        <div className="overview_first_half_header">
          <div>
            <h1>WELCOME</h1>
            <p>Welcome back, Murad!</p>
          </div>
          <button>Start Mailing</button>
        </div>
        <div className="announcements_container">
          <div className="announcements_header">
            <h1>Announcements:</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path
                d="M2.04297 10.5796L10.3277 2.41016L18.6125 10.5796"
                stroke="white"
                stroke-width="3.2678"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="announcements_body">
            <div className="announcement_text_container">
              1.
              <p>
                If the above account number does not match our account number on
                record, your submission will be removed from the queue.
              </p>
            </div>
            <div className="announcement_text_container">
              2.
              <p>
                If the above account number does not match our account number on
                record, your submission will be removed from the queue.
              </p>
            </div>
          </div>
        </div>
        <div className="job_history_container">
          <div className="job_history_header">
            <h1>JOB HISTORY REPORT:</h1>
            <p>See All</p>
          </div>
          <div className="job_history_body">
            <div className="job_history_body_content">
              <div className="order_content_titles">
                <h1>Order Name:</h1>
                <p>Quantity: 2 ; Cost: $302.3</p>
                <div className="order_actions">
                  <button>{iJob1}</button>
                  <button>{iJob2}</button>
                  <button>{iJob3}</button>
                </div>
              </div>
              <div className="order_content_details">
                <h1>Tracking Number: {t1}</h1>
                <p>Envelope Count: {fromInvoice}</p>
                <p>Page Count: {fromInvoice}</p>
                <p>Cost: {fromInvoice}</p>
              </div>
              <div className="order_ds_btns">
                <button className="d_cos_btn">Download COS</button>
                <button className="stop_btn">Stop Job</button>
              </div>
              <button className="job_status_btn job_status_btn_rejected">
                Rejected
              </button>
            </div>
            <div className="job_history_body_content">
              <div className="order_content_titles">
                <h1>Order Name:</h1>
                <p>Quantity: 2 ; Cost: $302.3</p>
                <div className="order_actions">
                  <button>{iJob1}</button>
                  <button>{iJob2}</button>
                  <button>{iJob3}</button>
                </div>
              </div>
              <div className="order_content_details">
                <h1>Tracking Number: {t1}</h1>
                <p>Envelope Count: {fromInvoice}</p>
                <p>Page Count: {fromInvoice}</p>
                <p>Cost: {fromInvoice}</p>
              </div>
              <div className="order_ds_btns">
                <button className="d_cos_btn">Download COS</button>
                <button className="stop_btn">Stop Job</button>
              </div>
              <button className="job_status_btn job_status_btn_pending">
                Pending
              </button>
            </div>
            <div className="job_history_body_content">
              <div className="order_content_titles">
                <h1>Order Name:</h1>
                <p>Quantity: 2 ; Cost: $302.3</p>
                <div className="order_actions">
                  <button>{iJob1}</button>
                  <button>{iJob2}</button>
                  <button>{iJob3}</button>
                </div>
              </div>
              <div className="order_content_details">
                <h1>Tracking Number: {t1}</h1>
                <p>Envelope Count: {fromInvoice}</p>
                <p>Page Count: {fromInvoice}</p>
                <p>Cost: {fromInvoice}</p>
              </div>
              <div className="order_ds_btns">
                <button className="d_cos_btn">Download COS</button>
                <button className="stop_btn">Stop Job</button>
              </div>
              <button className="job_status_btn job_status_btn_approved">
                Approved
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overview_second_half">
        <OverviewNotifyUser />
      </div>
    </div>
  );
};

export default DOverview;
