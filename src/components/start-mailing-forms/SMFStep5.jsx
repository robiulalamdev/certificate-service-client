/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";
import img from "../../assets/images/global/barcode.png";

const SMFStep5 = ({
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
      <h1 className="smf4_title mt-4">
        Set your return address for your envelope
      </h1>

      <div className="grid md:grid-cols-2 gap-4 px-[52px] py-[40px] max-w-[1161px] mx-auto mt-[60px] min-h-[583px] border-[1px] border-black bg-[#F8F8F8] rounded-[36px]">
        <div>
          <h1 className="text-[#001B33] text-[25px] font-semibold font-outfit uppercase">
            613016548795|245|10-15245
          </h1>
          <div className="max-w-[401px] w-full">
            <div>
              <label
                className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                htmlFor="Address"
              >
                Return Address name
              </label>
              <input
                {...register("return_address.return_address_name", {
                  required: true,
                })}
                type="text"
                required
                className="max-w-[401px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-[23px] mt-[6px]">
              <div>
                <label
                  className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                  htmlFor="Address"
                >
                  Firm name
                </label>
                <input
                  {...register("return_address.firm_name", {
                    required: true,
                  })}
                  required
                  type="text"
                  className="w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                />
              </div>
              <div>
                <label
                  className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                  htmlFor="Address"
                >
                  Address
                </label>
                <input
                  {...register("return_address.address", {
                    required: true,
                  })}
                  required
                  type="text"
                  className="w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                />
              </div>
            </div>
            <div className="flex gap-[23px] items-end mt-[6px]">
              <div className="min-w-[112.997px]">
                <label
                  className="text-[#001B33] text-[13.85px] uppercase font-semibold block"
                  htmlFor="Address"
                >
                  City
                </label>
                <input
                  {...register("return_address.city", {
                    required: true,
                  })}
                  required
                  type="text"
                  className="md:max-w-[112.997px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                />
              </div>
              <Popover placement="bottom-start">
                <PopoverHandler>
                  <Button
                    className={`md:max-w-[80.214px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left font-medium text-[18px] py-0 text-black`}
                  >
                    {watch("return_address.state") || (
                      <span className="text-[#979CA5]">Select</span>
                    )}
                  </Button>
                </PopoverHandler>
                <PopoverContent className="grid grid-cols-1 max-w-[115px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                  {["a", "b"]?.map((subCate, i) => (
                    <Button
                      onClick={() => setValue("return_address.state", subCate)}
                      key={i}
                      className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                    >
                      {subCate}
                    </Button>
                  ))}
                </PopoverContent>
              </Popover>
              <input
                {...register("return_address.zip", {
                  required: true,
                })}
                required
                type="text"
                placeholder="Zip"
                className="md:max-w-[80.214px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
              />
            </div>

            <Button className="text-[13.505px] font-semibold font-outfit normal-case text-primaryDark h-[35.321px] shadow-none mt-[20.33px]  hover:shadow-none border-[1px] border-[#008EDE] flex justify-center items-center p-0 w-full bg-[#F8F8F8] rounded-[3.117px]">
              AUTO FILL THE RETURN ADDRESS FROM SIGNATURE BLOCK
            </Button>
          </div>
          <div
            className="min-h-[142px] bg-white w-full rounded-[14.742px] shadow-[0px 3.469px 21.68px 0px rgba(0, 0, 0, 0.05)] 
          mt-[53.34px] px-[25px] py-[17px] font-rubik-lines"
          >
            <h1 className="text-xl leading-[27.1px] font-light text-black">
              SAMPLE CREDITOR ADDRESS
            </h1>
            <h1 className="text-xl leading-[27.1px] font-light text-black">
              Boeing Employees Credit Union
            </h1>
            <h1 className="text-xl leading-[27.1px] font-light text-black">
              PO Box 34522M/S 1022
            </h1>
            <h1 className="text-xl leading-[27.1px] font-light text-black">
              Seattle, WA 98101-4511
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end gap-4">
          <div className="flex justify-end items-start gap-[13px]">
            <h1 className="text-right uppercase text-black font-bold leading-[26.44px] text-[22.502px] font-outfit">
              RETURN SERVICE <br /> REQUESTED
            </h1>
            <div className="size-[146px] bg-white shadow-[0px 2.167px 13.545px 0px] flex justify-center items-center rounded-[15.44px]">
              <p className="text-center font-outfit uppercase text-[15.44px] leading-[18.27px]">
                post std us <br /> ppostage <br /> paid dummy <br /> text
              </p>
            </div>
          </div>
          <img className="h-[52.25px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SMFStep5;
