import banner from "../../assets/images/what-is-cos-images/banner.png";
import ThemeBreadCrumb from "../../components/commons/ThemeBreadCrumb";
import "../../styles/whatiscos.css";
import { Link } from "react-router-dom";

const ReasonsToOutsource = () => {
  return (
    <div className="container mx-auto p-4">
      <ThemeBreadCrumb routes="HOME / WHAT IS COS / REASONS TO OUTSOURCE" />
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-5 mt-5 reason_to_outsource_banner_container">
        <img className="" src={banner} alt="" />
        <div className="me-5 text-center">
          <h1 className="reason_to_outsource_title">6 REASONS</h1>
          <h6 className="reason_to_outsource_sub_title">
            Why Companies Should
          </h6>
          <h1 className="outsource">OUTSOURCE</h1>
          <p>their print management!</p>
        </div>
      </div>

      <section className="bottom_line_section bg-white rounded p-3 p-md-5">
        <div className="mx-auto" style={{ maxWidth: "874px" }}>
          <h1>INCREASE YOUR BOTTOM LINE</h1>
          <p className="mt-2">
            Using a third party service is going to allow you to save on
            materials and more importantly, labor. No investment in mailing
            equipment, postage meter leases, or dedicating office real estate to
            your mailing needs. That is a saving of time and expense that
            increases your bottom line.
          </p>
        </div>
      </section>

      <Link to="/">
        <div className="click_here_to_register mx-auto mb-4">
          <p>Click here to register now and get a free account today!</p>
        </div>
      </Link>
    </div>
  );
};

export default ReasonsToOutsource;
