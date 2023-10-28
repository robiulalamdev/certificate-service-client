import "../../styles/backStory.css";
import ceo from "../../assets/images/back-story-images/certificate-ceo.png";

const BackStory = () => {
  return (
    <div className="container my-5">
      <div className="back_story_banner">
        <h1>
          We know exactly <br /> what you need!
        </h1>
        <br />
        <h2>
          because we are a <br /> law firm as well{" "}
        </h2>
      </div>

      <div className="certificate_ceo_section d-flex flex-column flex-lg-row justify-content-around gap-5 align-items-center">
        <img className="" style={{ maxWidth: "350px" }} src={ceo} alt="" />
        <div>
          <p>
            In the early to mid 2000's, we had an amazing robust Chapter 13
            Bankruptcy Practice in Seattle, Washington. Our clients were in both
            the Eastern and Western Districts of Washington. Somehow, we had
            worked ourselves into being known as the 'Stop the Foreclosure and
            save the house' law firm in Washington State. Most of our cases were
            Chapter 13's. Everyday, we would have to stop our staff and we would
            all gather in the conference room to set up an envelope stuffing
            assembly line. Unfortunately, this entailed having staff stay after
            the close of business if it had been a particularly busy day.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <p className="back_story_p">
          Realizing that we were losing 1.5 billable hours per day x all of our
          employees, we quickly came to understand that we were losing alot of
          revenue. <br /> I started looking for a mailing house that would
          handle the small style runs of only 15-100 envelopes per mailing
          project. None existed (at the time). They were only interested in
          large runs of at least ten thousand pieces. <br /> If I had this
          problem, then every other bankruptcy law firm had this problem. Hence,
          we created{" "}
          <a target="_blank" href="CertificateofService.com">
            CertificateofService.com
          </a>{" "}
          . Specifically designed to allow bankruptcy law firms, trusteeships,
          and Chapter 13 Trustee's to quickly get their documents mailed to the
          Master Mailing List, we started the company in the back corner of our
          law office. <br /> Today, we represent 4,700 law firms across the
          country from Guam to Montanta to Texas to Vermont to Puerto Rico.
          Everyday we mail and track thousands upon thousands of envelopes from
          our own data center and print production facility. <br /> With our
          time freed up to stop stuffing envelopes every afternoon, we could get
          back to work and take advantage of the extra time we had just created.
          That is the benefit we provide to you and it is how we know exactly
          what your needs are.
        </p>
      </div>
    </div>
  );
};

export default BackStory;
