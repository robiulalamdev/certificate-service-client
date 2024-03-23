/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import { countries } from "../../utils/countries";

const SMStep8FormSection = ({
  number,
  name,
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  console.log(
    watch("manual_entry_of_additional_addresses.additional_address_1.name")
  );
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-[19px]">
        <h1 className="text-[22px] md:text-[35px] text-[#0055A3] font-semibold leading-[60.25px] font-outfit mt-4">
          {number}.
        </h1>
        <div className="grid grid-cols-1 gap-[15px] flex-grow w-full">
          <div>
            <label
              className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              {...register(
                `manual_entry_of_additional_addresses.${name}.name`,
                { required: false }
              )}
              type="text"
              className="w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div>
            <label
              className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Address
            </label>
            <input
              {...register(
                `manual_entry_of_additional_addresses.${name}.address`,
                { required: false }
              )}
              type="text"
              className="w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div>
            <label
              className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Address (cont.)
            </label>
            <input
              {...register(
                `manual_entry_of_additional_addresses.${name}.address_cont`,
                { required: false }
              )}
              type="text"
              className="w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-[15px]">
            <div>
              <label
                className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
                htmlFor="Name"
              >
                City
              </label>
              <input
                {...register(
                  `manual_entry_of_additional_addresses.${name}.city`,
                  { required: false }
                )}
                type="text"
                className="w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
              />
            </div>
            <div>
              <label
                className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
                htmlFor="state"
              >
                State
              </label>
              <Controller
                name={`manual_entry_of_additional_addresses.${name}.state`}
                control={control}
                render={({ field }) => (
                  <Popover placement="bottom-start">
                    <PopoverHandler>
                      <Button
                        className={`w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.349px] border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left font-medium text-[18px] py-0 text-black`}
                      >
                        {watch(
                          `manual_entry_of_additional_addresses.${name}.state`
                        ) || (
                          <span className="text-[#979CA5] normal-case">
                            Select
                          </span>
                        )}
                      </Button>
                    </PopoverHandler>
                    <PopoverContent className="grid grid-cols-1 max-w-[250px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                      {["a", "b"]?.map((subCate, i) => (
                        <Button
                          onClick={() =>
                            setValue(
                              `manual_entry_of_additional_addresses.${name}.state`,
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
              />
            </div>

            <div>
              <label
                className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
                htmlFor="Name"
              >
                ZIP
              </label>
              <input
                {...register(
                  `manual_entry_of_additional_addresses.${name}.zip`,
                  { required: false }
                )}
                type="text"
                className="w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
              />
            </div>
          </div>
          <div>
            <label
              className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
              htmlFor="Name"
            >
              Country (if other than United States)
            </label>
            <Controller
              name={`manual_entry_of_additional_addresses.${name}.country`}
              control={control}
              render={({ field }) => (
                <Popover placement="bottom-start">
                  <PopoverHandler>
                    <Button
                      className={`w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.349px] border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left font-medium text-[18px] py-0 text-black`}
                    >
                      {watch(
                        `manual_entry_of_additional_addresses.${name}.country`
                      ) || (
                        <span className="text-[#979CA5] normal-case">
                          Select
                        </span>
                      )}
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="grid grid-cols-1 max-w-fit max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                    {countries?.map((country, i) => (
                      <Button
                        onClick={() =>
                          setValue(
                            `manual_entry_of_additional_addresses.${name}.country`,
                            country?.label
                          )
                        }
                        key={i}
                        className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                      >
                        {country?.label}
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>
          <div>
            <label
              className="text-base font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
              htmlFor="Name"
            >
              SELECT DELIVERY OPTIONS{" "}
              <span className="text-[#DA170B]">(REQUIRED)*</span>
            </label>
            <Controller
              name={`manual_entry_of_additional_addresses.${name}.delivery_option`}
              control={control}
              required
              render={({ field }) => (
                <Popover placement="bottom-end">
                  <PopoverHandler>
                    <Button
                      className={`w-full h-[42px] bg-[#F7F7F7] outline-none border-[0.349px] font-normal border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left text-[18px] py-0 text-black`}
                    >
                      {watch(
                        `manual_entry_of_additional_addresses.${name}.delivery_option`
                      ) || (
                        <span className="text-[#979CA5] normal-case">
                          Select
                        </span>
                      )}
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="grid grid-cols-1 max-w-[706px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                    {[
                      "FIRST CLASS MAIL",
                      "CERTIFIED - RETURN RECEIPT - RESTRICTED DELIVERY (Add'l Fee)",
                      " CERTIFIED - RETURN RECEIPT - ADULT SIGNATURE REQ. (Add'l Fee)",
                    ]?.map((subCate, i) => (
                      <Button
                        onClick={() =>
                          setValue(
                            `manual_entry_of_additional_addresses.${name}.delivery_option`,
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SMStep8FormSection;
