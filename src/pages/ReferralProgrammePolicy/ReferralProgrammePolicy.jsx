/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "../../styles/referralProgrammePolicy.css";
import { Modal, ModalBody } from "reactstrap";
import { iCloseMailModal } from "../../utiles/icons";

const ReferralProgrammePolicy = () => {
  const [openMailContent, setOpenMailContent] = useState(false);

  const title = "<<your email address>>";
  const firstName = "<<First Name>>,";
  return (
    <div className="container">
      <div className="referral_programme_policy_container">
        <section>
          <h1 className="referral_programme_policy_title">
            CERTIFICATEOFSERVICE.COM CLIENT REFERRAL PROGRAM:
          </h1>

          <div className="referral_programme_policy_list">
            <p>
              We could use your help. We at CertificateofService.com would be
              most appreciative. One of the reasons we have been so successful
              over the years is because of our incredible customer service, our
              reliable print and mailing system, and our dedication to the
              bankruptcy community and its practitioners. We have been
              practicing bankruptcy law since 1998. We understand the unique
              functions of your practice and the requirement to get the mail out
              on time, every time.
            </p>

            <p>
              If you have been a client of ours, you know the incredible benefit
              we give to your office. Our system allows you to satisfy the
              necessary requirement of fulfilling due process, without taxing
              your highly paid and trained staff to stuff envelopes. We've taken
              all the work out of mailing your documents for you, so that you
              can focus on the things that really matter, like practicing law.
            </p>

            <p>
              The beauty of our system is that it is actually cheaper for you to
              use us than it is to do so in your own office. We've proven this
              with data, but you have also proven this with experience. You know
              that you cannot beat the convenience of what we do for the price
              we charge.
            </p>

            <p>
              Since 2005, we have kept our prices at fifteen cents per page. The
              only increases we have passed on to you are the postage rate
              increases. We need you help to keep our costs down. The only way
              to do that is to expand and increase our volume. For that, we need
              more clients.
            </p>

            <p>
              We would like to enlist your assistance to accomplish our goal of
              expanding and serving more debtor and creditor attorneys,
              trustees, chapter 13 trustees, as well as law offices in other
              disciplines, like estate planning and class action services.
            </p>
          </div>
        </section>

        <section className="referral_programme_policy_section">
          <h1
            className="referral_programme_policy_title"
            style={{ maxWidth: "934px" }}
          >
            THE POWER OF YOUR ENDORSEMENT AND RECOMMENDATION:
          </h1>

          <div className="referral_programme_policy_list">
            <p>
              You know how likely a client is to retain your offices when they
              have been referred by another attorney. It makes your life easy,
              the client has already placed their trust in you, because someone
              else in your profession said you were the best.
            </p>

            <p>
              We would very much appreciate it if you would do the same for us.
              If you will take the time to refer a new client or two or three or
              twenty to us, it is highly likely they will sign up and start
              using us. You know the business case for using us, you know the
              convenience case for using us, your endorsement and recommendation
              will push that person who is sitting on the fence off and into a
              an era of making their office systems run just as efficiently as
              yours.
            </p>
          </div>
        </section>

        <section className="referral_programme_policy_section">
          <h1
            className="referral_programme_policy_title"
            style={{ maxWidth: "1194px" }}
          >
            AN INCENTIVE TO RECOMMEND ANOTHER LAW FIRM TO
            CERTIFICATEOFSERVICE.COM.
          </h1>

          <div className="referral_programme_policy_list">
            <p>
              The more clients we get, the more we can focus on keeping our
              costs fixed. We are getting pressured at every turn in 2022 as
              inflation rises daily. Costs for paper, toner, envelopes,
              equipment, and maintenance agreements are rising at a rate that is
              nothing short of alarming. We do not want to raise our rates, but
              without an increase in fillings, we need to broaden our base of
              clients to bring more business in. If we can do that, we can hold
              the line on increasing costs.
            </p>

            <p>
              We would also like to express our gratitude directly to you for
              making a referral. When you refer someone to us and they sign up
              and use our service, we will be delighted to give you a ten dollar
              print credit for each and every referral you make. It is our way
              of saying thank you, we appreciate your endorsement.
            </p>

            <p>
              With that, we thank you for being a member of our family and ask
              you to refer us to someone new.
            </p>
          </div>
        </section>

        <section className="referral_programme_policy_section">
          <h1
            className="referral_programme_policy_title"
            style={{ maxWidth: "864px" }}
          >
            FILL OUT THE FORM BELOW TO SEND AN EMAIL TO A COLLEAGUE
          </h1>

          <div className="referral_programme_policy_list">
            <p>
              Fill out the form below and click on submit. An email will be sent
              to the person you tell us about. If they retain and use our
              service, we will place a $10.00 print credit on your existing
              account. There is no limit to the number of credits you can
              receive and there is no limit on the number of people you can
              refer.
            </p>
          </div>
        </section>

        <form className="referral_programme_form">
          <section className="signature_block_section">
            <h1 className="signature_block_title">YOUR INFORMATION:</h1>
            <div className="referral_inputs">
              <div className="referral_input_container">
                <label htmlFor="Attorney Name">Attorney Name</label>
                <input name="attorney_name" type="text" />
              </div>
              <div className="referral_input_container">
                <label htmlFor="Firm Name">Firm Name</label>
                <input name="Firm Name" type="number" />
              </div>

              <div className="referral_input_container">
                <label htmlFor="address">address</label>
                <input name="address" type="text" />
              </div>
              <div
                className="d-flex align-items-end referral_input_container w-full"
                style={{ gap: "28px" }}
              >
                <div className="w-full">
                  <label htmlFor="city">City</label>
                  <input name="city" type="text" />
                </div>
                <select className="small_input" name="" id="">
                  <option selected value="Select one (Optional)">
                    Select one (Optional)
                  </option>
                  <option value="option 1">option 1</option>
                  <option value="option 1">option 1</option>
                  <option value="option 1">option 1</option>
                  <option value="option 1">option 1</option>
                </select>
                <div className="small_input">
                  <label htmlFor="zip">Zip</label>
                  <input name="zip" type="text" />
                </div>
              </div>

              <div className="referral_input_container">
                <label htmlFor="E-mail address">E-mail address</label>
                <input name="E-mail address" type="email" />
              </div>
              <div className="referral_input_container">
                <label htmlFor="phone_number">PHONE NUMBER</label>
                <input name="phone_number" type="number" />
              </div>
            </div>
          </section>

          <section className="email_contact_section">
            <h1 className="signature_block_title">
              REFERRAL PARTY INFORMATION:
            </h1>
            <div className="referral_inputs">
              <div className="referral_input_container">
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
              </div>
              <div className="referral_input_container">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" />
              </div>
              <div className="referral_input_container">
                <label htmlFor="E-mail address">E-mail address</label>
                <input type="text" />
              </div>
            </div>
            <div className="" style={{ marginTop: "43px" }}>
              <p className="have_practice">
                HAVE PATIENCE! You are uploading a lot of information. It takes
                time to push all that through the web.
              </p>
              <div className="check_box_container mt-4">
                <input type="checkbox" name="check_here" id="check_here" />
                <label htmlFor="check_here">
                  Check here to save the information in this form so you don't
                  have to retype it the next time you are here.
                </label>
              </div>
            </div>
          </section>

          <div className="referral_form_btns">
            <button className="dc_btn">Send Referral</button>
            <button className="dc_btn">Clear form</button>
            <button
              onClick={(e) => {
                setOpenMailContent(!openMailContent);
                e.preventDefault();
              }}
              className="set_cookies_btn"
            >
              Review The Mail Content
            </button>
          </div>
        </form>
      </div>

      <Modal
        isOpen={openMailContent}
        onClose={() => setOpenMailContent(false)}
        className="review_mail_modal"
      >
        <div
          onClick={() => setOpenMailContent(false)}
          className=""
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            cursor: "pointer",
          }}
        >
          {iCloseMailModal}
        </div>
        <div className="review_mail_modal">
          <p className="email">{title}</p>

          <div className="hr_div"></div>

          <div className="mail_send_info_container">
            <div style={{ maxWidth: "200px" }}>
              <p>From:</p>
              <p>Sent:</p>
              <p>To:</p>
              <p>Subject:</p>
            </div>
            <div>
              <p>Your name @ Your Law Firm</p>
              <p>Date and Time</p>
              <p>Person you are referring us to</p>
              <p>
                Let me refer you to a great service I use for mailing my
                documents
              </p>
            </div>
          </div>

          <p className="email" style={{ marginTop: "43px" }}>
            {firstName}
          </p>
          <div className="mail_details_p_list">
            <p>
              I want to tell you about this great service I have been using to
              mail all my legal documents and correspondence for my firm,
              <strong> firmName</strong>.
            </p>
            <p>
              I have been using CertificateofService.com for some time now and I
              want to tell you how it has transformed my practice. No longer do
              I have staff sitting around a table stuffing countless envelopes.
              No longer do I have to buy boxes and boxes of paper, envelopes,
              toner, or stamps. My life is better and I have more time to focus
              on more meaningful tasks.
            </p>

            <p>
              You know the value of your staff. Their time is not well spent by
              stuffing envelopes. They did not go through all that education and
              learning to perform an absolutely necessary, but menial task of
              stuffing envelopes.
            </p>

            <p>
              CertificateofService.com has taken this menial task and automated
              it. We simply go to their website, log in, and upload our
              documents along with our mailing list. If it is a bankruptcy case,
              we just tell them to get the mailing list from the Court! We don't
              need to any heavy lifting, they do it all for us. It takes us
              about two minutes to upload a mailing project to them and then our
              staff can concentrate on revenue generating tasks, rather than
              revenue draining tasks (like stuffing envelopes).
            </p>

            <p>
              About an hour later, we receive an email from them letting us know
              that the mail is now on its way across the country. We also
              receive a ready to file Certificate of Service that proves up the
              mailing we had them do. My staff just files the .pdf Certificate
              with the Court and that's it. The mailing is complete! What took
              us hours, now takes only minutes. It is a huge time saver and they
              do it for less than what it would cost me to do it in house.
              CertificateofService.com is a lifesaver for my firm.
            </p>

            <p>
              I was referred to them by another practitioner who turned me onto
              them and I would like to return the favor. I know you are going to
              benefit by using their service.
            </p>

            <p>
              Their staff is amazing and the owners of the business are
              bankruptcy practitioners themselves, Jay and Kathryn Jump. They
              understand the importance of our documents as well as the need to
              mail the same day we upload to them. If I upload a document to
              them in the morning, I know it went out the same day. I know that
              I can rely on them. That is priceless.
            </p>

            <p>
              Best of all, they will defend their certificate if a creditor or
              court ever contests service. That is a level of insurance and
              reliability you just don't find in many of the businesses in our
              practice area. They will also train your entire staff on how to
              use the system, repeatedly, for as long as it takes.
            </p>

            <p>
              I would very much appreciate it if you would give them a call to
              learn more, or just go right ahead and sign up. They are an ala
              carte service, you pay for only what you use. There are no
              contracts to sign, no hidden fees, and they handle everything from
              a single letter to one individual to a Chapter 11 Disclosure with
              multiple class ballots to five thousand people. Heck, they even do
              Certified Mail and put the tracking number right onto the
              certificate!
            </p>

            <p>
              I know you're going to love it. It solved the greatest problem I
              didn't know I had. For years, I thought it was just normal to
              stuff the mail in our own offices, but it was such a time drain
              for our staff. Then I found this service and my staff is no longer
              bogged down with this menial task. It works for me, I know it will
              work for you as well. Thank you for taking a moment to read this.
              I hope you will find all the advantages that I did by signing up
              with CertificateofService.com.
            </p>

            <p>
              Here are a couple of links which will help explain what they do.
            </p>

            <div>
              <p>
                http://www.certificateofservice.com/video/COS_Splash_Movie.mp4
              </p>
              <p>http://www.certificateofservice.com/video/envReview.mp4</p>
              <p>
                Thank you and good luck with your business! We all need to help
                each other out!
              </p>
              <p>http://www.certificateofservice.com</p>
            </div>
          </div>

          <div className="mail_footer_info">
            <p>Your Name</p>
            <p>FirmName</p>
            <p>Address</p>
            <p>
              city <span>state</span> <zip></zip>
            </p>
            <p>phone</p>
            <p>email</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReferralProgrammePolicy;
