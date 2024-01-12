/* eslint-disable react/no-unknown-property */
import React from "react";
import "../../styles/dashboard/dashboard.css";
import "../../styles/dashboard/dOverview.css";
import OverviewNotifyUser from "../../components/dashboard-ui/overview-ui/OverviewNotifyUser";

import { Link } from "react-router-dom";
import useAuth from "../../lib/useAuth";
import { useGetJobsQuery } from "../../redux/features/job/jobApi";
import JobHistoryCard from "../../components/dashboard-ui/overview-ui/JobHistoryCard";

const DOverview = () => {
  const { user } = useAuth();
  const { data } = useGetJobsQuery();
  // console.log(data);
  return (
    <div className="dashboard_overview">
      <div className="overview_first_half">
        <div className="overview_first_half_header">
          <div>
            <h1>WELCOME</h1>
            <p>Welcome back, {user?.full_name}!</p>
          </div>
          <Link to="/start-mailing">
            <button>Start Mailing</button>
          </Link>
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
          <div className="job_history_body max-h-[300px] overflow-y-auto">
            {data?.data?.map((job, index) => (
              <JobHistoryCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
      <div className="overview_second_half">
        <OverviewNotifyUser user={user} />
      </div>
    </div>
  );
};

export default DOverview;
