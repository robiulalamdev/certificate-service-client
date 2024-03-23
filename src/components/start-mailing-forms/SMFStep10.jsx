/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { Controller } from "react-hook-form";

/* eslint-disable react/no-unescaped-entities */
const SMFStep10 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  useEffect(() => {
    setValue("service_level", "Normal");
  }, []);
  return (
    <div className="container mx-auto">
      <div className="mt-[60px]">
        <h1 className="text-[40px] font-semibold text-[#0055A3] leading-[39px] font-outfit">
          Choose Normal service or Rush service
        </h1>
        <p className="text-[#001B33] text-xl leading-[32px] mt-[30px]">
          <p>
            The cut off time for getting a mailing out in todays mail is noon
            pacific standard time.
          </p>
          <br />
          <p>
            Jobs which come in after that time are slated for mailing the next
            day. If you would like to send the job out today anyway, please
            choose the RUSH option. However, you will be charged a RUSH PRIORITY
            fee of .25 cents per page with NO postal or printing discounts
            applied.
          </p>

          <br />
          <p>
            Any job received after 4 p.m. PST (RUSH Designation or not) will be
            slated for delivery the next business day and revert to your normal
            print rate.
          </p>
          <br />
          <p>
            While we make every effort to expedite same day service, we do not
            guarantee same day mailing, but we do guarantee it will go out no
            later than the next business day.
          </p>
          {/* Unlike other notice providers, we mail each and every business day. In
          order to have that level of efficiency, we need to not only print your
          documents, but also make them ready for delivery to the United States
          Post Office. Legally, the moment we have registered your envelope with
          the USPS, it is 'in the mail stream'. This is a result of our close
          working relationship with the USPS and the fact that we are licensed
          and approved commercial mailer for USPS. This means we have a cut off
          each day at Noon (PST).If you get your documents uploaded to us prior
          to noon, we will do our best to get your documents out that same day.
          If you upload your documents for mailing after noon (PST), we will
          hold them over until the next business day. However, you can let us
          know that your job needs to go out today no matter what by selecting
          the RUSH option. We will then jump your mailing project to the front
          of the line and make sure that we get it into the mailstream that day.
          However, we offer no postage discounts and we charge twenty five cents
          per page to get your documents out the door on time. */}
        </p>
      </div>

      <h1 className="text-[#001B33] text-[40px] font-semibold leading-[48px] font-outfit mt-[60px]">
        CHOOSE YOUR MAIL OUTPUT SERVICE LEVEL:
      </h1>

      <Controller
        name="service_level"
        control={control}
        render={({ field }) => (
          <>
            <div className="flex items-start gap-[7px] text-[#001B33] text-[18px] md:text-[40px] font-semibold font-outfit mt-[54px]">
              <input
                onChange={() => {
                  setValue("service_level", "Normal");
                }}
                checked={watch("service_level") === "Normal"}
                className="size-[34px] mt-2"
                type="radio"
              />
              <div>
                <p>NORMAL (received prior to Noon PST)</p>
                <p className="text-[#001B33] text-xl leading-[32px] font-normal">
                  If received prior to noon PST, otherwise, will be sent the
                  next business day. Billing is at your normal print rate.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[7px] text-[#001B33] text-[18px] md:text-[40px] font-semibold font-outfit mt-[54px]">
              <input
                onChange={() => {
                  setValue("service_level", "Rush");
                }}
                checked={watch("service_level") === "Rush"}
                className="size-[34px] mt-2"
                type="radio"
              />
              <div>
                <p>RUSH (received between Noon and 4 p.m. PST)</p>
                <p className="text-[#001B33] text-xl leading-[32px] font-normal max-w-[837px]">
                  This job must go out today regardless of the noon cutoff time.
                  You understand you will be billed at the RUSH PRIORITY charge
                  of 25 cents per page and you will pay full postage. THERE ARE
                  NO REFUNDS FOR CANCELLED JOBS!
                </p>
              </div>
            </div>
          </>
        )}
      />

      {/* <div className="mt-[60px] text-xl leading-[32px] text-[#001B33] font-outfit">
        <p>
          The cut off time for getting a mailing out in todays mail is noon
          pacific standard time.
        </p>
        <br />
        <p>
          Jobs which come in after that time are slated for mailing the next
          day. If you would like to send the job out today anyway, please choose
          the RUSH option. However, you will be charged a RUSH PRIORITY fee of
          .25 cents per page with NO postal or printing discounts applied.
        </p>

        <br />
        <p>
          Any job received after 4 p.m. PST (RUSH Designation or not) will be
          slated for delivery the next business day and revert to your normal
          print rate.
        </p>
        <br />
        <p>
          While we make every effort to expedite same day service, we do not
          guarantee same day mailing, but we do guarantee it will go out no
          later than the next business day.
        </p>
      </div> */}
    </div>
  );
};

export default SMFStep10;
