import "../../styles/valueOfTime.css";
import banner from "../../assets/images/value-of-time-images/banner.png";
import { Link } from "react-router-dom";

const ValueOfTime = () => {
  return (
    <div className="container">
      <div className="value_of_time_banner row align-items-center my-5">
        <img className="col-lg-4 mx-auto" src={banner} alt="" />
        <div className="col-lg-8 text-center text-md-start">
          <h1>
            THE VALUE OF <br /> YOUR TIME
          </h1>
          <p>
            If you asked most of our clients what it is we do, they would
            respond that we mail their bankruptcy notices and pleadings for them
            at a convenient and acceptable price.
            <br />
            <br />
            They would be correct, but also missing what it is we really do.
            <br />
            <br />
            We create time and opportunity for you and your law practice.
          </p>
        </div>
      </div>

      <section className="value_of_time_p my-5">
        <p>
          You could stuff your own envelopes for an hour and say that you saved
          the $50 that it might have cost you to use a mailing service, but what
          if you had been able to utilize that time by working on a motion, or
          bringing in a new client?{" "}
        </p>
        <p>
          Perhaps you saved the $50.00, but in so doing, you lost the
          opportunity to make three hundred dollars for a billable hour, or
          several thousand dollars on a new retainer because that potential
          client went to the next person who could spare them some time. Worse,
          you still have to pay the post office, so you are still paying out
          $35.00 of the $50.00 in postage anyway. Did you really think you were
          only worth $15.00 per hour?
        </p>
        <p>
          We give you the ability to realize the opportunity cost or as more
          appropriately defined, we give you the ability to maximize your
          'expected' value, or the full amount of earning capacity you are
          capable of. You did not go to law school to stuff envelopes. Your
          staff did not learn about the practice of bankruptcy to stuff
          envelopes. This is not a good use of your time.
        </p>
        <p>
          Example: You don’t know how to fix your car, so you’re going to spend
          5 hours attempting to figure it out, rather than paying someone who
          knows what they’re looking for to fix it. It happens all the time. In
          these scenarios a lot of people don’t want to “spend money” so instead
          they waste time(which is often much worse than spending money). They
          could have been making xx/hr doing something they already know how to
          do and/or enjoy, that would have more than paid for the cost of the
          mechanic to just get the job done.
        </p>
        <p>
          Using our mailing service is making an investment in yourself that
          allows you to reap a higher return and more profitable law firm.
          Investing in yourself and giving yourself the ability to do more is
          going to pay dividends in the long run.
        </p>
      </section>

      <Link to="/">
        <div className="click_here_to_register mx-auto my-4">
          <p>Click here to register now and get a free account today!</p>
        </div>
      </Link>
    </div>
  );
};

export default ValueOfTime;
