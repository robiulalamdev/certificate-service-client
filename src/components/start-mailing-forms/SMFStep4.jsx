/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import SelectDropdown from "../commons/SelectDropdown";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { Controller } from "react-hook-form";

const SMFStep4 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  return (
    <div>
      <h1 className="smf4_title">Signature Block for Certificate</h1>

      <div>
        <h1 className="smf4_signature_title">/s/ Attorney ECF Signature</h1>
        <div className="ecf_signatures max-w-[1105px] mx-auto">
          <div className="ecf_signature_input_container">
            <label htmlFor="">
              Attorney Name <span>**</span>
            </label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.attorney_name",
                {
                  required: true,
                }
              )}
              type="text"
              required
              className="w331"
            />
          </div>
          <div
            className="ecf_signature_input_container"
            style={{ width: "167px" }}
          >
            <label htmlFor="">Bar Number</label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.bar_number",
                {
                  required: false,
                }
              )}
              type="text"
            />
          </div>
          <div className="ecf_signature_input_container">
            <p>
              OPTIONAL LINE TO INCLUDE EMAIL OR YOUR ROLE IN THE CASE <br />
              Information in this field is dependant upon your local rules.
            </p>
            <Controller
              name="signature_block_for_certificate.attorney_ecf_signature.optional_info"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  selected={watch(
                    "signature_block_for_certificate.attorney_ecf_signature.optional_info"
                  )}
                  setSelected={(selected) => {
                    field.onChange(selected);
                  }}
                  items={["CALIFORNIA"]}
                  className={`ecf_signature_dropdowns w331`}
                />
              )}
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.optional_info",
                {
                  required: false,
                }
              )}
            />
          </div>
        </div>
        <div className="flex items-end gap-y-[33px] gap-x-[33px] max-w-[1105px] w-fit flex-wrap md:flex-nowrap mx-auto mt-[30px]">
          <div className="ecf_signature_input_container">
            <label htmlFor="">Firm name</label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.firm_name",
                {
                  required: false,
                }
              )}
              type="text"
              className="md:min-w-[244px] w-full"
            />
          </div>
          <div className="ecf_signature_input_container">
            <label htmlFor="">
              Address <span>**</span>
            </label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.address",
                {
                  required: false,
                }
              )}
              type="text"
              className="md:min-w-[298px] w-full"
            />
          </div>

          <div className="flex items-end gap-x-[11px] w-full">
            <div className="ecf_signature_input_container">
              <label htmlFor="">
                City <span>**</span>
              </label>
              <input
                {...register(
                  "signature_block_for_certificate.attorney_ecf_signature.city",
                  {
                    required: true,
                  }
                )}
                required
                type="text"
                className="min-w-[162px] w-full"
              />
            </div>

            <div className="flex items-end gap-x-[11px] md:min-w-[115px] w-full">
              <Controller
                name="signature_block_for_certificate.attorney_ecf_signature.state"
                control={control}
                render={({ field }) => (
                  <Popover placement="bottom-start">
                    <PopoverHandler>
                      <Button
                        className={`md:min-w-[115px] w-full h-[47px] bg-[#F7F7F7] shadow-none hover:shadow-none normal-case border-[0.5px] rounded-[5px] border-black text-left font-medium text-[18px] py-0 text-black`}
                      >
                        {watch(
                          "signature_block_for_certificate.attorney_ecf_signature.state"
                        ) || <span className="text-[#979CA5]">Select</span>}
                      </Button>
                    </PopoverHandler>
                    <PopoverContent className="grid grid-cols-1 max-w-[115px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                      {["a", "b"]?.map((subCate, i) => (
                        <Button
                          onClick={() =>
                            setValue(
                              "signature_block_for_certificate.attorney_ecf_signature.state",
                              subCate
                            )
                          }
                          key={i}
                          className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                        >
                          {subCate}
                        </Button>
                      ))}
                    </PopoverContent>
                  </Popover>
                )}
                {...register(
                  "signature_block_for_certificate.attorney_ecf_signature.state",
                  {
                    required: false,
                  }
                )}
              />
            </div>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.zip",
                {
                  required: false,
                }
              )}
              type="number"
              placeholder="Zip"
              className="min-w-[115px] h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] rounded-[5px] border-black text-left font-medium text-[18px] px-2 text-black placeholder:text-[#979CA5] font-roboto"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 max-w-[1105px] w-full gap-x-[33px] mx-auto mt-[30px]">
          <div className="ecf_signature_input_container">
            <label htmlFor="">Fax (Optional)</label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.fax",
                {
                  required: false,
                }
              )}
              type="number"
              placeholder="(555) 555-1212"
              className="w-full !min-w-full px-2"
            />
          </div>
          <div className="ecf_signature_input_container">
            <label htmlFor="">
              phone NUMBER <span>**</span>
            </label>
            <input
              {...register(
                "signature_block_for_certificate.attorney_ecf_signature.phone_number",
                {
                  required: true,
                }
              )}
              required
              type="text"
              placeholder="(555) 555-1212"
              className="w-full !min-w-full px-2"
            />
          </div>

          <p className="text-xl text-[#001B33] mt-[24px]">
            <span className="text-[#DA170B] text-xl">**</span> Indicates the
            required fields.
          </p>
        </div>
        <div className="max-w-[1105px] w-full gap-x-[33px] mx-auto mt-[30px]">
          <h1 className="text-[50px] text-primaryDark text-center font-extrabold font-outfit mb-[39px]">
            Email Contact Information
          </h1>

          <div className="ecf_signature_input_container">
            <label htmlFor="">
              EMAIL FOR UPLOAD RECEIPT / CERTIFICATE / INVOICE{" "}
              <span className="!text-[15px]">(Required)*</span>
            </label>
            <input
              {...register(
                "signature_block_for_certificate.email_contact_information.email",
                {
                  required: true,
                }
              )}
              required
              type="email"
              placeholder="youremailhere@lawfirm.com"
              className="w-full !min-w-full px-2"
            />
            <p className="text-primaryDark text-[15px] font-outfit font-medium mt-[5px]">
              **THIS IS THE EMAIL WE WILL BE CONTACTING FIRST IF THERE ARE
              UPLOAD ISSUES. THE EMAIL THAT SHOULD GO IN THIS FIELD IS YOURS, AS
              YOU ARE THE PERSON WHO UPLOADED THE MAILING TO US.**
            </p>
          </div>
          <div className="ecf_signature_input_container mt-[30px]">
            <label htmlFor="">
              ADDITIONAL EMAILS FOR RECEIPT OF CERTIFICATE
            </label>
            <input
              {...register(
                "signature_block_for_certificate.email_contact_information.additional_email_1",
                {
                  required: false,
                }
              )}
              type="email"
              placeholder="(Example) paralegal@lawfirm.com"
              className="w-full !min-w-full px-2"
            />
          </div>
          <div className="ecf_signature_input_container mt-[30px]">
            <input
              {...register(
                "signature_block_for_certificate.email_contact_information.additional_email_2",
                {
                  required: false,
                }
              )}
              type="email"
              placeholder="(Example) clerk@lawfirm.com"
              className="w-full !min-w-full px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep4;
