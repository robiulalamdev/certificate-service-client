/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { iJob1, iJob2, iJob3 } from "../../../utiles/icons";
import { Button, Dialog } from "@material-tailwind/react";
import img from "../../../assets/icons/alert.png";
import { SpinnerCircularFixed } from "spinners-react";
import { useRemoveJobMutation } from "../../../redux/features/job/jobApi";
import { toast } from "react-toastify";

const t1 = "<Number for their job>";
const fromInvoice = "<Data from invoice>";

const JobHistoryCard = ({ job }) => {
  const [removeJob, { isLoading }] = useRemoveJobMutation();
  const [open, setOpen] = useState(null);

  const handleRemove = async () => {
    const options = {
      id: open?._id,
      data: {},
    };
    const result = await removeJob(options);
    if (result?.data?.success) {
      toast.success("Job Request Remove Success");
    } else {
      toast.error("Job Request Remove Failed!");
    }
    setOpen(null);
  };
  return (
    <>
      <div className="job_history_body_content">
        <div className="order_content_titles">
          <h1>Order Name:</h1>
          <p>Quantity: 2 ; Cost: $302.3</p>
          <div className="order_actions">
            <button>{iJob1}</button>
            <button onClick={() => setOpen(job)} className="hover:text-red-600">
              {iJob2}
            </button>
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
        <button
          className={`job_status_btn  ${
            (job?.status === "Pending" && "job_status_btn_pending") ||
            (job?.status === "Rejected" && "job_status_btn_rejected") ||
            (job?.status === "Approved" && "job_status_btn_approved")
          }`}
        >
          Pending
        </button>
      </div>
      <Dialog
        open={open ? true : false}
        handler={() => setOpen(null)}
        size="xs"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 py-8 px-2">
          <img className="size-[80px]" src={img} alt="" />
          <h1 className="text-xl font-bold text-gray-900 leading-[22px] font-outfit text-center">
            Are you sure
          </h1>
          <p className="text-center text-sm text-gray-600">
            you want to delete this data?. This action <br /> cannot be undone
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button
              onClick={() => setOpen(null)}
              className="h-12 min-w-[100px] w-full shadow-none hover:shadow-none rounded normal-case bg-white hover:bg-red-100 border text-black font-outfit text-base"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleRemove()}
              className="h-12 w-full min-w-[120px] shadow-none hover:shadow-none text-white rounded normal-case bg-red-600 font-outfit text-base flex justify-center items-center gap-2"
            >
              {isLoading && (
                <SpinnerCircularFixed
                  size={25}
                  thickness={170}
                  speed={350}
                  color="white"
                  secondaryColor="rgba(124, 57, 172, 0.19)"
                />
              )}
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default JobHistoryCard;
