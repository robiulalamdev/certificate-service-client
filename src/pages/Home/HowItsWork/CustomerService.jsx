/* eslint-disable react/no-unescaped-entities */
import ThemeBreadCrumb from "../../../components/commons/ThemeBreadCrumb";
import "../../../styles/howItsWork.css";
import img from "../../../assets/images/how-its-work-images/ceo.png";
import { Link } from "react-router-dom";

const CustomerService = () => {
  return (
    <div>
      <ThemeBreadCrumb routes="HOME / WHAT IS COS / HOW IT WORKS/ CUSTOMER SERVICE" />
      <div className="customer_banner flex flex-col justify-center">
        <div className="container p-4 mx-auto text-center text-md-start">
          <h2>
            GOOD customer service <br />
            <span className="text-white">is not enough.</span>
          </h2>
          <br />
          <br />
          <h2 className="text-white">GREAT CUSTOMER SERVICE</h2>
          <h1>IS CONTAGIOUS!</h1>
        </div>
      </div>

      <section className="grid lg:grid-cols-12 justify-content-between align-items-center ceo-container container p-4 mx-auto my-5">
        <div className="lg:col-span-4 image text-center mb-4 mb-lg-0">
          <img src={img} alt="" />
          <div>
            <h1>Kathryn Jump</h1>
            <span>CFO Bankruptcy Paralegal</span>
          </div>
        </div>
        <div className="lg:col-span-8">
          <p>
            Over a decade ago, we started our business with the belief that our
            success is directly connected to your success. This was the same
            perspective we brought from the law firm, namely, our reputation is
            the only thing that matters. We have always strived to make sure
            that the customer comes first. Over the years, we have come to
            recognize the true value of what we provide to your and your staff.
          </p>
          <br />
          <p>
            We don't just offer a print and mail service, we offer you a tool to
            increase your productivity and efficiency. By using our service, you
            free up time to do the things that will benefit your bottom line,
            whether that be more revenue or more time.{" "}
          </p>

          <button>Read More</button>
        </div>
      </section>

      <Link to="/">
        <div className="click_here_to_register mx-auto my-5">
          <p>Click here to register now and get a free account today!</p>
        </div>
      </Link>
    </div>
  );
};

export default CustomerService;
