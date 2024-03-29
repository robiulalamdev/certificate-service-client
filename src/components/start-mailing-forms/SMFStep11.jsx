import { Tooltip } from "@material-tailwind/react";
import { iInfo } from "../../utiles/icons";

/* eslint-disable react/no-unescaped-entities */
const SMFStep11 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  return (
    <div className="container mx-auto">
      <div className="mt-[60px]">
        <h1 className="text-[40px] font-semibold text-[#0055A3] leading-[39px] font-outfit">
          Do you have any custom or special work requests?{" "}
          <Tooltip
            className="bg-gray-100 text-current border max-w-[800px]"
            content={
              <>
                <p className="text-[#001B33] text-xl leading-[32px]">
                  If you have a request that is specific to your mailing
                  project, such as pulling from multiple ECF sources, or placing
                  your Chapter 11 ballot on a different colored paper, please
                  let us know here. We will do our very best to meet your
                  requests in a timely and efficient manner.
                </p>
                <br />
                <p className="text-[#001B33] text-xl leading-[32px]">
                  However, please understand that what you are asking is
                  typically something different from our normal method of
                  mailing and service. If the request you are making is outside
                  the normal scope of our service or requires clarification, we
                  will place your mailing job on HOLD status and contact you for
                  further clarification.
                </p>
                <br />
                <p className="text-[#001B33] text-xl leading-[32px]">
                  Once your job has been placed on HOLD status, it is no longer
                  scheduled for mailing service and will not be scheduled for
                  mailing service until we have resolved the custom work and/or
                  special request. Your prompt response is necessary in order to
                  ensure timely mail service.
                </p>
              </>
            }
          >
            {iInfo}
          </Tooltip>
        </h1>
      </div>

      <div className="mt-[40px]">
        <h1 className="text-[40px] font-semibold leading-[48px] text-[#0055A3] text-center">
          Custom Work Request: (Limit 144 characters)
        </h1>
        <div className="max-w-[1005px] mx-auto">
          <textarea
            {...register("special_work_requests.custom_work_request", {
              required: true,
            })}
            required
            maxLength={144}
            className="w-full min-h-[324.156px] rounded-[22.718px] bg-[#EEE] mt-[20px] p-4"
          ></textarea>
          <div className="grid md:grid-cols-2 gap-x-[33px] mt-[59px]">
            <div>
              <label
                className="text-[#001B33] text-xl font-semibold font-outfit uppercase block"
                htmlFor="phone number"
              >
                phone number
              </label>
              <input
                {...register("special_work_requests.phone_number", {
                  required: true,
                })}
                required
                type="number"
                placeholder="(555) 555-1212"
                className="placeholder:text-[#D9D9D9] h-[47px] w-full bg-[#F7F7F7] border-[0.5px] border-black rounded-[5px] mt-[5px] px-2"
              />
            </div>
            <div>
              <label
                className="text-[#001B33] text-xl font-semibold font-outfit uppercase block"
                htmlFor="phone number"
              >
                Your Name for when we call
              </label>
              <input
                {...register("special_work_requests.name", {
                  required: true,
                })}
                required
                type="text"
                placeholder=""
                className="placeholder:text-[#D9D9D9] h-[47px] w-full bg-[#F7F7F7] border-[0.5px] border-black rounded-[5px] mt-[5px] px-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-[7px] text-[#001B33] text-[18px] md:text-[40px] font-semibold font-outfit mt-[18px]">
            <input
              {...register("special_work_requests.ok_to_text", {
                required: false,
              })}
              onChange={(e) =>
                setValue("special_work_requests.ok_to_text", e.target.checked)
              }
              className="size-[34px]"
              type="checkbox"
            />
            <p className="text-[#001B33] text-xl font-semibold uppercase">
              Ok to Text
            </p>
          </div>
          <div className="mt-[60px]">
            <h1 className="text-[#0055A3] font-semibold font-outfit text-[40px] leading-[48px]">
              WE DO NOT -
            </h1>
            <p className="text-[#001B33] text-[28px] leading-[120%] mt-1">
              (1) Remove duplicate addresses
            </p>
            <p className="text-[#001B33] text-[28px] leading-[120%] mt-1">
              (2) Modify the address list or accept further exclusions through
              this field.
            </p>
            <p className="text-[#001B33] text-[28px] leading-[120%] mt-1">
              (3) Change addresses from the address indicated on the ECF Master
              Mailing List
            </p>
            <p className="text-[#001B33] text-[28px] leading-[120%] mt-1">
              (4) Staple Documents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep11;
