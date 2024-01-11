/* eslint-disable react/prop-types */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

const SMStep8FormSection = ({ number }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-[19px]">
        <h1 className="text-[50px] text-[#0055A3] font-semibold leading-[60.25px] font-outfit mt-4">
          {number}.
        </h1>
        <div className="grid grid-cols-1 gap-[30px] flex-grow w-full">
          <div>
            <label
              className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div>
            <label
              className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Address
            </label>
            <input
              type="text"
              className="w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div>
            <label
              className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
              htmlFor="Name"
            >
              Address (cont.)
            </label>
            <input
              type="text"
              className="w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-[30px]">
            <div>
              <label
                className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
                htmlFor="Name"
              >
                City
              </label>
              <input
                type="text"
                className="w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
              />
            </div>
            <div>
              <label
                className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
                htmlFor="Name"
              >
                State
              </label>
              <Popover placement="bottom-start">
                <PopoverHandler>
                  <Button
                    className={`w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.349px] font-normal border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left font-medium text-[18px] py-0 text-black`}
                  >
                    <span className="text-[#979CA5] normal-case">Select</span>
                  </Button>
                </PopoverHandler>
                <PopoverContent className="grid grid-cols-1 max-w-[115px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                  {["a", "b"]?.map((subCate, i) => (
                    <Button
                      key={i}
                      className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                    >
                      {subCate}
                    </Button>
                  ))}
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label
                className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px]"
                htmlFor="Name"
              >
                ZIP
              </label>
              <input
                type="text"
                className="w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.5px] border-black px-2 rounded-[5px]"
              />
            </div>
          </div>
          <div>
            <label
              className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
              htmlFor="Name"
            >
              Country (if other than United States)
            </label>
            <Popover placement="bottom-start">
              <PopoverHandler>
                <Button
                  className={`w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.349px] font-normal border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left font-medium text-[18px] py-0 text-black`}
                ></Button>
              </PopoverHandler>
              <PopoverContent className="grid grid-cols-1 max-w-[115px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                {["a", "b"]?.map((subCate, i) => (
                  <Button
                    key={i}
                    className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                  >
                    {subCate}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label
              className="text-xl font-semibold text-[#001B33] font-outfit uppercase mb-[2px] block"
              htmlFor="Name"
            >
              SELECT DELIVERY OPTIONS{" "}
              <span className="text-[#DA170B]">(REQUIRED)*</span>
            </label>
            <Popover placement="bottom-end">
              <PopoverHandler>
                <Button
                  className={`w-full h-[47px] bg-[#F7F7F7] outline-none border-[0.349px] font-normal border-black  rounded-[3.384px] px-2 shadow-none hover:shadow-none normal-case text-left text-[18px] py-0 text-black`}
                ></Button>
              </PopoverHandler>
              <PopoverContent className="grid grid-cols-1 max-w-[706px] max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                {[
                  "Select",
                  "FIRST CLASS MAIL",
                  "CERTIFIED - RETURN RECEIPT - RESTRICTED DELIVERY (Add'l Fee)",
                  " CERTIFIED - RETURN RECEIPT - ADULT SIGNATURE REQ. (Add'l Fee)",
                ]?.map((subCate, i) => (
                  <Button
                    key={i}
                    className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0"
                  >
                    {subCate}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMStep8FormSection;
