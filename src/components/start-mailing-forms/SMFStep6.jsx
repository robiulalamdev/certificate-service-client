/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Tooltip } from "@material-tailwind/react";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { iInfo } from "../../utiles/icons";

const SMFStep6 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  useEffect(() => {
    setValue(
      "pacer_master_mailing_matrix.exclude",
      "Exclude the United States Bankruptcy Court"
    );
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="smf4_title mt-4">ECF / PACER MASTER MAILING MATRIX</h1>
      <p className="text-[#001B33] text-xl font-outfit leading-[27.3px] mt-[30px]">
        This is the easiest, the preferred, and the most used option for
        bankruptcy noticing services. With the Case Information you provide, we
        will go to your Court's ECF system and download the master mailing
        matrix that pertains to your case. Those addresses will be converted and
        verified against the USPS database system then printed on the #10
        envelope with the return address you designate above.
      </p>

      <div className="flex items-center gap-[7px] text-[#0055A3] text-[30px] font-semibold font-outfit mt-[68px]">
        <input
          {...register("pacer_master_mailing_matrix.download_ecf", {
            required: false,
          })}
          onChange={(e) =>
            setValue(
              "pacer_master_mailing_matrix.download_ecf",
              e.target.checked
            )
          }
          className="size-[34px]"
          type="checkbox"
        />
        <p>PLEASE DOWNLOAD THE THE ECF/PACER MASTER MAILING MATRIX!</p>
      </div>

      <Controller
        name="pacer_master_mailing_matrix.exclude"
        control={control}
        defaultValue="Exclude the United States Bankruptcy Court"
        render={({ field }) => (
          <>
            <div className="flex items-start gap-[3.34px] mt-[68px]">
              <input
                onChange={() => {
                  setValue(
                    "pacer_master_mailing_matrix.exclude",
                    "Exclude the Parties listed below"
                  );
                }}
                checked={
                  watch("pacer_master_mailing_matrix.exclude") ===
                  "Exclude the Parties listed below"
                }
                className="stroke-[#0078BA] size-[36px] mt-2 cursor-pointer"
                type="radio"
              />
              <div>
                <h1 className="text-[#0055A3] font-semibold text-[40px] font-outfit leading-[48.2px]">
                  Exclude the Parties listed below
                </h1>
                {watch("pacer_master_mailing_matrix.exclude") ===
                  "Exclude the Parties listed below" && (
                  <>
                    <div className="grid md:grid-cols-2 gap-x-[53px] gap-y-[20px] mt-[30px]">
                      <div className="min-h-[276px] max-w-[516px] w-full rounded-[18px] bg-[#EEE] px-[25px] py-[24px]">
                        <h1 className="text-[#DA170B] text-[21.194px] font-medium leading-[34.652px] font-outfit text-nowrap">
                          **READ THIS BEFORE ENTERING EXCLUSIONS**
                        </h1>
                        <p className="text-[#001B33] text-[21.194px] font-medium leading-[34.652px] font-outfit">
                          Type the name of the parties that you wish to exclude
                          exactly as they appear on the master mailing matrix.
                          WE OFFER NO GUARANTEES THE PARTIES YOU LIST WILL BE
                          EXCLUDED.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-y-[22.63px]">
                        <div>
                          <label
                            className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                            htmlFor="Exclude name 01"
                          >
                            Exclude name 01
                          </label>
                          <input
                            {...register(
                              "pacer_master_mailing_matrix.exclude_the_parties_listed_below.exclude_name_1",
                              { required: true }
                            )}
                            required
                            type="text"
                            className="max-w-[401px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                          />
                        </div>
                        <div>
                          <label
                            className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                            htmlFor="Exclude name 01"
                          >
                            Exclude name 02
                          </label>
                          <input
                            {...register(
                              "pacer_master_mailing_matrix.exclude_the_parties_listed_below.exclude_name_2",
                              { required: true }
                            )}
                            required
                            type="text"
                            className="max-w-[401px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                          />
                        </div>
                        <div>
                          <label
                            className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                            htmlFor="Exclude name 01"
                          >
                            Exclude name 03
                          </label>
                          <input
                            {...register(
                              "pacer_master_mailing_matrix.exclude_the_parties_listed_below.exclude_name_3",
                              { required: true }
                            )}
                            required
                            type="text"
                            className="max-w-[401px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                          />
                        </div>
                        <div>
                          <label
                            className="text-[#001B33] text-[13.85px] uppercase font-semibold"
                            htmlFor="Exclude name 01"
                          >
                            Exclude name 04
                          </label>
                          <input
                            {...register(
                              "pacer_master_mailing_matrix.exclude_the_parties_listed_below.exclude_name_4",
                              { required: true }
                            )}
                            required
                            type="text"
                            className="max-w-[401px] w-full h-[33px] outline-none border-[0.349px] border-black bg-[#F7F7F7] rounded-[3.384px] px-2"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-start gap-[3.34px] mt-[49px]">
              <input
                onChange={() => {
                  setValue(
                    "pacer_master_mailing_matrix.exclude",
                    "Exclude the United States Bankruptcy Court"
                  );
                }}
                checked={
                  watch("pacer_master_mailing_matrix.exclude") ===
                  "Exclude the United States Bankruptcy Court"
                }
                className="stroke-[#0078BA] size-[36px] mt-2 cursor-pointer"
                type="radio"
              />
              <div>
                <h1 className="text-[#0055A3] font-semibold text-[40px] font-outfit leading-[48.2px]">
                  Exclude the United States Bankruptcy Court{" "}
                  <Tooltip
                    className="bg-gray-100 text-current border max-w-[300px]"
                    content={
                      <>
                        <p className="text-[#001B33] text-[15px] font-outfit leading-[24.525px] mt-[15px] max-w-[798px]">
                          Unless your Court Clerk has explicitly told you,
                          directly, that they want to receive documents, leave
                          this option checked. They don't want your mail, they
                          already received it via PACER when you uploaded it.
                        </p>
                      </>
                    }
                  >
                    {iInfo}
                  </Tooltip>
                </h1>
              </div>
            </div>
            <div className="flex items-start gap-[3.34px] mt-[49px]">
              <input
                onChange={() => {
                  setValue(
                    "pacer_master_mailing_matrix.exclude",
                    "Exclude the United States Trustee"
                  );
                }}
                checked={
                  watch("pacer_master_mailing_matrix.exclude") ===
                  "Exclude the United States Trustee"
                }
                className="stroke-[#0078BA] size-[36px] mt-2 cursor-pointer"
                type="radio"
              />
              <div>
                <h1 className="text-[#0055A3] font-semibold text-[40px] font-outfit leading-[48.2px]">
                  Exclude the United States Trustee{" "}
                  <Tooltip
                    className="bg-gray-100 text-current border max-w-[300px]"
                    content={
                      <>
                        <p className="text-[#001B33] text-[15px] font-outfit leading-[24.525px] mt-[15px] max-w-[798px]">
                          Chances are, the UST received an electronic notice
                          when you filed your pleadings on ECF. Rule 7004
                          requires that they be served. If you do not wish to
                          have them served by first class mail, check the box
                          above to exclude them (not recommended). it.
                        </p>
                      </>
                    }
                  >
                    {iInfo}
                  </Tooltip>
                </h1>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default SMFStep6;
