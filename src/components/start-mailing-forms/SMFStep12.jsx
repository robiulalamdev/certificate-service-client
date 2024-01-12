import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const SMFStep12 = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-[60px]">
        <div className="flex items-center flex-wrap gap-[23px]">
          <h1 className="text-[#0055A3] text-[40px] font-outfit font-semibold uppercase">
            User Agreement
          </h1>
          <Link to="/start-mailing/user-agreement">
            <button
              type="button"
              className="max-w-[384.289px] px-1 w-full h-[49.341px] bg-[#0055A3] rounded-[2.847px] text-white text-[28.466px]"
            >
              Read The User Agreement
            </button>
          </Link>
        </div>

        <div className="flex items-start gap-[7px] text-[#001B33] text-[18px] md:text-[30px] font-semibold font-outfit mt-[54px]">
          <input className="min-w-[34px] min-h-[34px] mt-2" type="checkbox" />
          <div>
            <p>
              You authorize this mailing project to go out via USPS first class
              mail and agree to be bound by the terms set forth in the User
              Agreement.{" "}
              <span className="text-[#DA170B] font-semibold text-[30px]">
                (Required)*
              </span>
            </p>
            <p className="text-[#001B33] text-xl leading-[32px] font-normal">
              By checking this box, you are certifying that you (i) have
              reviewed the User Agreement, the Privacy Notice and the Website
              Terms of Use agreement and (ii) and agree to be bound by the terms
              set forth therein as well as (iii) you agree to pay your invoice
              in accordance with the terms set forth in your credit card
              agreement or by other means established with BK Attorney Services,
              LLC, (iv) no relationship exists between CertificateofService.com
              and the party that is the subject of the mailing, (v) payments are
              not made from the bankruptcy estate, and (v1) you are directing
              CertificateofService.com to mail these documents on your firms
              behalf. You further understand that once the certificate has been
              released there are no refunds or returns.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-[40px] flex-wrap mt-[60px]">
          <button className="max-w-[364px] w-full h-[49.341px] rounded-[2.847px] text-white text-[28.466px] bg-gradient-to-r from-[#20C9FF] to-[#008EDE]">
            Upload Mailing Project
          </button>
          <button
            className="max-w-[153px] w-full h-[49.341px] text-[#008EDE] text-[20px] border-[1px] border-[#008EDE]
          rounded-[3px]"
          >
            Clear Form
          </button>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <p className="mt-[30px] text-[#001B33] text-xl font-outfit">
            HAVE PATIENCE! You are uploading a lot of information. It takes time
            to push all that through the web.
          </p>
          <div className="flex items-center gap-[11px] mt-[16px]">
            <input className="size-[34px]" type="checkbox" />
            <p className="text-[#001B33] text-xl font-outfit">
              Check here to save the information in this form so you don't have
              to retype it the next time you are here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep12;
