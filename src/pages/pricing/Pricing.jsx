import "../../styles/pricing.css";
import img from "../../assets/images/pricing-images/img1.png";
const Pricing = () => {
  return (
    <div className="">
      <div className="pricing_banner text-center">
        <h1>Pricing</h1>
        <p>
          You use us only when you need us. There are no contracts, no monthly
          fees, no hidden costs.
        </p>
      </div>
      <div className="container">
        <div className="all_inclusive_pricing_section">
          <h1>ALL INCLUSIVE PRICING - YOU CHOOSE THE OPTION BEST FOR YOU</h1>
          <p>
            We charge based upon the number of pages in your uploaded document.
            We include in our price, the cost and preparation of the envelope
            for mailing, as well as the the paper, toner, fuser, printing,
            folding, collating, inserting, sealing, document review, and the
            preparation of the ready to file Certificate of Service.
          </p>
        </div>

        <section className="see_example_section row align-items-center px-md-5 py-5">
          <img
            className="col-lg-4 mx-auto"
            style={{ maxWidth: "350px" }}
            src={img}
            alt=""
          />
          <div className="col-lg-8 mx-auto mt-5 mt-lg-0 text-center text-lg-start">
            <h1>SEE EXAMPLE #1</h1>
            <p className="mt-2">
              PRINT DOCUMENTS ONE PAGE <br /> PER SIDE OF SHEET
            </p>
            <button className="mt-5">Next</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
