/* eslint-disable react/no-unescaped-entities */
import ThemeBreadCrumb from "../../components/commons/ThemeBreadCrumb";
import "../../styles/whatiscos.css";
import img1 from "../../assets/images/what-is-cos-images/pre-noon.png";
import img2 from "../../assets/images/what-is-cos-images/post-noon.png";
import { Link } from "react-router-dom";

const MailSchedule = () => {
  return (
    <div>
      <ThemeBreadCrumb routes="HOME / WHAT IS COS / MAIL SCHEDULE" />
      <section className="mail_schedule_banner px-2 !py-[66px]">
        <div className="grid lg:grid-cols-2 container mx-auto text-center text-md-start">
          <div className="">
            <h1>
              We are on a <br />
              <span>tight schedule...</span>
            </h1>
            <h1 className="mt-4">
              We've not a <br />
              <span>moment to lose...</span>
            </h1>
          </div>
          <div className=" mt-4 lg:mt-0">
            <p>
              We are an ala carte service delivering same day mailing services
              if you get your uploaded documents to us prior to noon Pacific
              Time Zone. <br /> <br /> Documents which come in after noon are
              slated for service the next business day, unless you direct us to
              send it out same day as a RUSH mailing project. That is truly on
              demand!
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-[80px] mb-14">
        <div className="mail_schedule_2nd_section flex flex-col justify-center items-center gap-5 !pt-4">
          <img className="w-full" src={img1} alt="" />
          <img className="w-full mt-5" src={img2} alt="" />
        </div>
        <div className="mail_schedule_2nd_section pt-[80px]">
          <p>
            * Saturday, Sunday, and all Federal Holidays are NOT business days.
            We are closed on any day that the Federal Courts are closed and/or
            the Post Office is closed.
          </p>
        </div>

        <Link to="/">
          <div className="click_here_to_register mx-auto mt-[80px] ">
            <p>Click here to register now and get a free account today!</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default MailSchedule;
