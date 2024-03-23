/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import img from "../../assets/images/start-mailing/f7_img1.png";

const SMFStep7 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
  setOwnMailingFile,
  ownMailingFile,
}) => {
  // {...register("user_supplied_address_list.own_mailing_list_file", {
  //   required: false,
  // })}
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-start justify-between gap-x-[52px] gap-y-[32px]">
        <div className="flex-grow">
          <h1 className="smf4_title mt-4">
            YOUR OWN TEXT FILE OR .CSV (EXCEL) USER <br /> SUPPLIED ADDRESS LIST
          </h1>
          <p className="text-[#001B33] text-base font-outfit leading-[27.3px] mt-[30px]">
            This is the easiest, the preferred, and the most used option for
            bankruptcy noticing services. With the Case Information you provide,
            we will go to your Court's ECF system and download the master
            mailing matrix that pertains to your case. Those addresses will be
            converted and verified against the USPS database system then printed
            on the #10 envelope with the return address you designate above.
          </p>

          <div className="flex items-start gap-[7px] text-[#0055A3] text-[18px] md:text-[30px] font-semibold font-outfit mt-[68px]">
            <input
              {...register(
                "user_supplied_address_list.mailing_list_attaching",
                {
                  required: false,
                }
              )}
              onChange={(e) =>
                setValue(
                  "user_supplied_address_list.mailing_list_attaching",
                  e.target.checked
                )
              }
              className="size-[34px] cursor-pointer mt-1"
              type="checkbox"
            />
            <p>
              PLEASE USE THE USER SUPPLIED MAILING LIST THAT I AM ATTACHING
              BELOW.
            </p>
          </div>
          <div className="text-[#0055A3] text-[30px] font-semibold font-outfit mt-[68px]">
            <p className="text-[#0055A3] font-semibold leading-[28px] font-outfit text-[18px] md:text-[25px]">
              ATTACH YOUR OWN MAILING LIST FILE
            </p>
            <div className="flex items-start flex-wrap sm:flex-nowrap gap-[9px] mt-[14px]">
              <div className="relative cursor-pointer flex justify-center items-center min-w-[151px] max-w-[151px] h-[52.522px] border-[0.657px] border-[#001B33] bg-[#EEE] rounded-[6.565px]">
                <p className="text-[#001B33] text-[19px] leading-[26px] font-outfit">
                  Choose File
                </p>
                <input
                  onChange={(e) => setOwnMailingFile(e.target.files[0])}
                  type="file"
                  accept=".pdf, .doc, .csv, .txt"
                  multiple={false}
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-0"
                />
              </div>

              <div>
                <input
                  value={ownMailingFile?.name}
                  type="text"
                  className="max-w-[979px] h-[53px] outline-none bg-[#EEE] border-[0.657px] border-[#001B33] rounded-[6.565px] px-2 text-black text-sm w-full"
                />
                <p className="text-[#DA170B] text-sm font-semibold leading-[18.075px] font-outfit mt-[15px]">
                  **DO NOT SEND SCANNED DOCUMENTS! WE WILL REJECT ANY SCANNED
                  ADDRESS LISTS. IT WILL DELAY PROCESSING OF YOUR MAIL!**
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="max-w-[1055px] w-full mx-auto h-[5px] bg-[#008EDE] rounded-[5px] mt-[59px] xl:hidden"></div>

        <div className="w-full xl:max-w-[800px] xl:border-l-[5px] border-[#008EDE] xl:pl-10 xl:rounded-md">
          <div className="flex items-start gap-[24px] mt-[64px] xl:mt-0 flex-wrap">
            <div className="max-w-[649px]">
              <h1 className="text-[#0055A3] font-semibold text-[40px] leading-[48px] font-outfit">
                YOUR OWN PDF MAILING MATRIX
              </h1>
              <p className="text-base] text-[#001B33] font-outfit leading-[34px] mt-[20px]">
                You can edit and upload your own 3 column pdf mailing matrix
                after you have downloaded the master mailing matrix from the
                Court. To learn how to modify and cross out address on the
                Master Mailing Matrix that you do not want to mail to, please
                click on the mailing matrix displayed below.
              </p>
            </div>
            <div className="flex items-start gap-7">
              <div className="min-w-[168px] h-[217px]">
                <img className="w-full h-full" src={img} alt="" />
              </div>
              <div className="min-w-[338px] max-w-[338px]">
                <p className="text-[#001B33] text-[15px] leading-[24.525px]">
                  FORMATTING GUIDELINES:PLEASE REVIEW AND UNDERSTAND IF YOU ARE
                  GOING TO UPLOAD YOUR OWN MAILING ADDRESS LISTS. YOU UPLOAD
                  YOUR OWN LIST AT YOUR OWN RISK!
                </p>
                <Link to="/">
                  <p className="text-[#0078BA] text-xl leading-[32px] underline font-outfit mt-5">
                    Click here
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="flex items-center flex-wrap gap-[25px]">
              <h1 className="text-[#0055A3] font-semibold text-[20px] md:text-[26px] leading-[48px] font-outfit">
                CSV OR EXCEL FILE FORMAT
              </h1>
              <div className="relative cursor-pointer flex justify-center items-center min-w-[214px] max-w-[214px] h-[52.522px] border-[0.657px] border-[#001B33] bg-[#EEE] rounded-[6.565px]">
                <p className="text-[#001B33] text-[19px] leading-[26px] font-outfit font-semibold">
                  CSV Sample File
                </p>
                <input
                  type="file"
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-0"
                />
              </div>
            </div>
            <p className="text-base text-[#001B33] font-outfit leading-[34px] mt-[20px]">
              We will accept a csv file (such as one you would create in Excel),
              but we ask that you follow our formatting procedures. Click on the
              button below to view our csv sample file. We have preformatted the
              column headers. You can simply cut and paste your addresses into
              the file, save it on your hard drive, and then attach it to this
              upload form using the file selection field above.
            </p>
          </div>
          <div className="mt-[40px]">
            <div className="flex items-center flex-wrap gap-[25px]">
              <h1 className="text-[#0055A3] font-semibold text-base md:text-[26px] leading-[48px] font-outfit">
                ONE COLUMN TEXT SAMPLE
              </h1>
              <div className="relative cursor-pointer flex justify-center items-center min-w-[364px] max-w-[364px] h-[52.522px] border-[0.657px] border-[#001B33] bg-[#EEE] rounded-[6.565px]">
                <p className="text-[#001B33] text-[19px] leading-[26px] font-outfit font-semibold">
                  ONE COLUMN TEXT SAMPLE
                </p>
                <input
                  type="file"
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-0"
                />
              </div>
            </div>
            <p className="text-base text-[#001B33] font-outfit leading-[34px] mt-[20px]">
              You can also create a one column text file of addresses. On a
              windows machine, you would use the Notepad program. There are some
              formatting rules to follow. Each address cannot be more than six
              lines and each address must be separated by one empty line. There
              is no limit to how many addresses you can place in your one column
              text file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep7;
