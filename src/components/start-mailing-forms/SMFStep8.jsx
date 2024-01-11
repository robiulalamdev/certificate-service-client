/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import img from "../../assets/images/start-mailing/f7_img1.png";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import SMStep8FormSection from "./SMStep8FormSection";

const SMFStep8 = () => {
  return (
    <div className="container mx-auto">
      <h1 className="smf4_title mt-4">
        MANUAL ENTRY OF ADDITIONAL ADDRESSES <br /> FOR THIS PARTICULAR MAILING
      </h1>
      <div className="flex items-center gap-[7px] text-[#0055A3] text-[18px] md:text-[30px] font-semibold font-outfit mt-[68px]">
        <input className="size-[34px]" type="checkbox" />
        <p>
          PLEASE USE THE MANUALLY ENTERED ADDRESSES THAT I AM PROVIDING BELOW.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[50px] mt-[60px]">
        <SMStep8FormSection number="01" />
        <SMStep8FormSection number="02" />
        <SMStep8FormSection number="03" />
        <SMStep8FormSection number="04" />
        <SMStep8FormSection number="05" />
        <SMStep8FormSection number="06" />
      </div>
    </div>
  );
};

export default SMFStep8;
