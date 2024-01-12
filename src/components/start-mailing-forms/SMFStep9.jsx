/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

/* eslint-disable react/no-unescaped-entities */
const SMFStep9 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  useEffect(() => {
    setValue("envelope_in_your_mailing.add_postage", "NO");
  }, []);

  const isTrue =
    watch("envelope_in_your_mailing.add_postage") === "Yes" ? true : false;
  return (
    <div className="container mx-auto">
      <h1 className="smf4_title mt-4">
        Would you like to include a #9 return envelope <br /> in your mailing?
      </h1>
      <p className="mt-[30px] text-xl text-[#001B33] font-outfit">
        If you require a reply envelope to be mailed with your documents, we
        would be happy to include one for you. Simply check the box to indicate{" "}
        <br />
        that you would like us to include an return envelope
      </p>
      <div className="flex items-start gap-[7px] text-[#0055A3] text-[18px] md:text-[30px] font-semibold font-outfit mt-[68px]">
        <input
          {...register("envelope_in_your_mailing.information_provide", {
            required: false,
          })}
          onChange={(e) =>
            setValue(
              "envelope_in_your_mailing.information_provide",
              e.target.checked
            )
          }
          className="size-[34px]"
          type="checkbox"
        />
        <p>
          YES! PLEASE INSERT A #9 ENVELOPE WITH THE RETURN INFORMATION LISTED &
          PROVIDED BELOW.
        </p>
      </div>

      <h1 className="text-[#001B33] text-[40px] font-semibold leading-[48px] font-outfit mt-[60px]">
        WOULD YOU LIKE TO ADD POSTAGE TO THE RETURN ENVELOPE? (NOT RECOMMENDED)
      </h1>

      <Controller
        name="envelope_in_your_mailing.add_postage"
        control={control}
        defaultValue="Exclude the United States Bankruptcy Court"
        render={({ field }) => (
          <>
            <div className="flex items-start gap-[7px] text-[#001B33] text-[18px] md:text-[40px] font-semibold font-outfit mt-[54px]">
              <input
                onChange={() => {
                  setValue("envelope_in_your_mailing.add_postage", "No");
                }}
                checked={watch("envelope_in_your_mailing.add_postage") === "No"}
                className="size-[34px] mt-2"
                type="radio"
              />
              <p>NO, RECIPIENT WILL AFFIX THEIR OWN FIRST CLASS POSTAGE.</p>
            </div>
            <div className="flex items-start gap-[7px] text-[#001B33] text-[18px] md:text-[40px] font-semibold font-outfit mt-[54px]">
              <input
                onChange={() => {
                  setValue("envelope_in_your_mailing.add_postage", "Yes");
                }}
                checked={
                  watch("envelope_in_your_mailing.add_postage") === "Yes"
                }
                className="size-[34px] mt-2"
                type="radio"
              />
              <p>
                YES! PLEASE ADD FIRST CLASS STAMP TO THE #9 RETURN <br />{" "}
                ENVELOPE
                <span className="text-[#DA170B] text-xl">
                  {" "}
                  (NOT RECOMMENDED)
                </span>
              </p>
            </div>
          </>
        )}
      />

      <div className="max-w-[1161px] w-full mx-auto min-h-[583px] px-[29px] py-[32px] border-[1px] border-black bg-[#F8F8F8] rounded-[36px] mt-[60px]">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div>
            <div className="border-b-[1px] border-[#001B33] w-full max-w-[220px]">
              <h1 className="text-[#001B33] text-[13.8px] font-semibold font-outfit uppercase">
                From
              </h1>
            </div>
            <input
              {...register("envelope_in_your_mailing.return_envelope.from_1", {
                required: isTrue,
              })}
              type="email"
              required={isTrue}
              className="border-b-[1px] outline-none bg-transparent h-[35px] border-[#001B33] max-w-[220px] block"
            />
            <input
              {...register("envelope_in_your_mailing.return_envelope.from_2", {
                required: isTrue,
              })}
              type="email"
              required={isTrue}
              className="border-b-[1px] outline-none bg-transparent h-[35px] border-[#001B33] max-w-[220px] block"
            />
            <input
              {...register("envelope_in_your_mailing.return_envelope.from_3", {
                required: isTrue,
              })}
              type="email"
              required={isTrue}
              className="border-b-[1px] outline-none bg-transparent h-[35px] border-[#001B33] max-w-[220px] block"
            />
            <input
              {...register("envelope_in_your_mailing.return_envelope.from_4", {
                required: isTrue,
              })}
              type="email"
              required={isTrue}
              className="border-b-[1px] outline-none bg-transparent h-[35px] border-[#001B33] max-w-[220px] block"
            />
          </div>
          <div className="size-[146px] bg-white rounded-[9.211px] shadow-[0px 2.167px 13.545px 0px rgba(0, 0, 0, 0.05)] flex justify-center items-center">
            <h1 className="text-center text-black text-[25.51px] font-outfit">
              Place <br /> stamp <br /> Here
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[8.29px] mt-[80px] max-w-[553.904px]">
          <div>
            <label
              className="text-[#001B33] font-outfit text-[19px] block font-semibold uppercase"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              {...register("envelope_in_your_mailing.return_envelope.name", {
                required: isTrue,
              })}
              type="text"
              required={isTrue}
              className="rounded-[4.817px] bg-transparent h-[45.583px] outline-none border-[0.482px] border-black px-2 w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-y-[8.29px] gap-x-[31.79px]">
            <div>
              <label
                className="text-[#001B33] font-outfit text-[19px] block font-semibold uppercase"
                htmlFor="Name"
              >
                Office
              </label>
              <input
                {...register(
                  "envelope_in_your_mailing.return_envelope.office",
                  {
                    required: isTrue,
                  }
                )}
                type="text"
                required={isTrue}
                className="rounded-[4.817px] bg-transparent h-[45.583px] outline-none border-[0.482px] border-black px-2 w-full"
              />
            </div>
            <div>
              <label
                className="text-[#001B33] font-outfit text-[19px] block font-semibold uppercase"
                htmlFor="Name"
              >
                Address
              </label>
              <input
                {...register(
                  "envelope_in_your_mailing.return_envelope.address",
                  {
                    required: isTrue,
                  }
                )}
                type="text"
                required={isTrue}
                className="rounded-[4.817px] bg-transparent h-[45.583px] outline-none border-[0.482px] border-black px-2 w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 items-end gap-y-[8.29px] gap-x-[10.6px]">
            <div>
              <label
                className="text-[#001B33] font-outfit text-[19px] block font-semibold uppercase"
                htmlFor="Name"
              >
                City
              </label>
              <input
                {...register("envelope_in_your_mailing.return_envelope.city", {
                  required: isTrue,
                })}
                type="text"
                required={isTrue}
                className="rounded-[4.817px] bg-transparent h-[45.583px] outline-none border-[0.482px] border-black px-2 w-full"
              />
            </div>
            <Controller
              name="envelope_in_your_mailing.return_envelope.state"
              control={control}
              render={({ field }) => (
                <Popover placement="bottom-start">
                  <PopoverHandler>
                    <Button
                      className={`w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.349px] font-normal border-black rounded-[4.817px] px-2 shadow-none hover:shadow-none normal-case text-left text-[18px] py-0 text-black`}
                    >
                      {watch(
                        "envelope_in_your_mailing.return_envelope.state"
                      ) || <span className="text-[#979CA5]">Select</span>}
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="grid grid-cols-1 max-w-[115px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                    {["a", "b"]?.map((subCate, i) => (
                      <Button
                        onClick={() =>
                          setValue(
                            "envelope_in_your_mailing.return_envelope.state",
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

            <input
              {...register("envelope_in_your_mailing.return_envelope.zip", {
                required: isTrue,
              })}
              required={isTrue}
              type="text"
              placeholder="Zip"
              className="rounded-[4.817px] bg-transparent h-[45.583px] outline-none border-[0.482px] border-black px-2 w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-[60px]">
        <h1 className="text-[40px] font-semibold text-[#0055A3] leading-[39px] font-outfit">
          WE CHARGE A FEE FOR THIS SERVICE.
        </h1>
        <p className="text-[#001B33] text-xl leading-[32px] mt-4">
          If you require a return envelope to be mailed with your documents, we
          would be happy to include one for you. Simply fill out the information
          in this section and we will print a set of #9 return envelopes with
          your return address and destination address on them.
        </p>
        <p className="text-[#001B33] text-xl leading-[32px] mt-5">
          The charge for each #9 return envelope requires printing the envelope
          with the proper address and coding to ensure delivery to you. In
          addition, inserting a #9 envelope into the #10 envelope with the
          documents requires some additional processing and effort by staff. The
          charge for including a #9 envelope is fifteen cents per envelope x the
          number of recipients in the case.
        </p>
        <p className="text-[#001B33] text-xl leading-[32px] mt-5">
          In addition, if you would like us to include a stamp on the return
          envelope (NOT RECOMMENDED), we will charge you the full rate price for
          a first class stamp to place on the return envelope.
        </p>
      </div>
    </div>
  );
};

export default SMFStep9;
