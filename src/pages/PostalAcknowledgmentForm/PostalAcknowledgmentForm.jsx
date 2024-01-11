/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../styles/postalAcknowledgmentForm.css";

const PostalAcknowledgmentForm = () => {
  return (
    <div className="paf_container">
      <div className="paf_banner_container">
        <div className="container ">
          <h1 className="paf_title">POSTAL ACKNOWLEDGMENT FORM</h1>
          <p>
            As part of our work share arrangement with the United States Postal
            Service, we must keep on file a USPS - PAF form. This form
            authorizes us to process your mail for distribution in the USPS
            mailstream. More importantly, it is the way we are able to get
            postal discounts and to extend those savings to you.
          </p>
          <p>
            “This form takes just a few seconds to fill out and will be
            effective for one year. You will need to fill this out each and
            every year that you continue to use our service.”
          </p>
        </div>
      </div>

      <div className="container paf_second_section">
        <h1>NCOA LINK MAIL PROCESSING EQUIPMENT ACKNOWLEDGMENT FORM</h1>
        <p>
          The collection of information on this Processing Acknowledgment Form
          (PAF) is required by the Privacy Act of 1974. The United States Postal
          Service (USPS) required that each NCOA Mail Processing Equipment
          Service Provider Licensee have a completed NCOA Link MPE PAF for each
          of tehir NCOA MPE customers prior to providing the NCOA Link MPE
          Service.
        </p>
        <p>
          The Licensee is also required by the USPS to retain a copy of the
          completed form for each of its customers and to obtain an updated PAF
          form from each of its customers at a minimum of once per year. Any
          signature upon this PAF shall be considered valid for all purposes and
          have the same effect whether it is an ink signed hardcopy of
          equivalent alternative.
        </p>
      </div>

      <div className="container">
        <section className="paf_form_section">
          <form>
            <div className="paf_grid_cols_2">
              <div className="paf_input_container">
                <label htmlFor="Law Firm /Company Name">
                  Law Firm /Company Name
                </label>
                <input type="text" />
              </div>
              <div className="paf_input_container">
                <label htmlFor="Address">Address</label>
                <input type="text" />
              </div>
            </div>

            <div className="paf_grid_cols_3">
              <div className="paf_input_container">
                <label htmlFor="City">City</label>
                <input type="text" />
              </div>
              <div className="paf_input_container">
                <label htmlFor="State">State</label>
                <select value="State">
                  <option value="1">a</option>
                  <option value="1">a</option>
                  <option value="1">a</option>
                  <option value="1">a</option>
                </select>
              </div>
              <div className="paf_input_container">
                <label htmlFor="Zip Code">Zip Code</label>
                <input type="text" />
              </div>
            </div>
            <div className="paf_grid_cols_1">
              <div className="paf_input_container">
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="text" />
              </div>
            </div>

            <div className="paf_grid_cols_2">
              <div className="paf_input_container">
                <label htmlFor="">NAICS Number</label>
                <select value="State">
                  <option value="1">a</option>
                  <option value="1">a</option>
                  <option value="1">a</option>
                  <option value="1">a</option>
                </select>
              </div>
              <div className="paf_input_container">
                <label htmlFor="Email Address">Email Address</label>
                <input type="email" />
              </div>
            </div>

            <div className="paf_grid_cols_2">
              <div className="paf_input_container">
                <label htmlFor="">Website / URL</label>
                <input type="text" />
              </div>
              <div className="paf_input_container">
                <label htmlFor="USPS Mailer ID">USPS Mailer ID</label>
                <input type="text" />
              </div>
              <div className="paf_input_container">
                <label htmlFor="">Parent Company</label>
                <input type="text" />
              </div>
            </div>

            <p className="paf_form_text">
              do hereby acknowledge that I have received and reviewed the NCOA
              Link Mail Processing Equipment Information Package supplied to me
              by BK Attorney Services, LLC, and NCOA Link MPE Data User
              Licensee.
            </p>
          </form>
        </section>

        <div className="flex justify-center">
          <button className="paf_click_here_to_card">
            CLICK HERE TO READ THE FULL NCOA LINK INFORMATION PACKAGE
          </button>
        </div>

        <div className="paf_third_section">
          <h1>
            I also understand that the sole purpose of the NOCA Link MPE service
            is to provide:
          </h1>

          <p>
            (1) Mailpiece redirection (via re-addressing) due to customer moves
            for mailpieces that I have submitted to the Licensee for mailing;
          </p>
          <p>
            (2) A mailpiece correction service (electronic return) for my
            customer addresses that will be used for preparation of future
            mailings. The mailpiece facsimiles that I have submitted to the
            Licensee will be returned within seven business days of processing,
            unless I authorize a longer time period in writing; OR
          </p>

          <p>
            (3) Mailpiece address correction service in which mailpieces that
            obtain adrress correction information as a result of this process
            will be seperated from my mailing and returned either in the form
            hardcopy or photocopied mailpieces and returned within seven
            business days of processing by the Licensee, unless I authorize a
            longer time period in writing. The information provided to me for
            thsi service will be used for preparation of future mailings.
          </p>

          <h2>
            Furthermore, I understand that the NCOA Link MPE process may not be
            used to create or maintain new movers' lists. The identity of the
            licensee is as follows: Business Name (Mail Processor): BK Attorney
            Services, LLC (d/b/a CertificateofService.com).The name of the
            authorized representative is Jay S. Jump, CEO BK Attorney Services,
            LLC.
          </h2>
        </div>

        <section className="paf_form_section">
          <h1 className="paf_form_title">eSIgnature (Sign and Submit)</h1>
          <form>
            <div className="paf_grid_cols_2">
              <div className="paf_input_container">
                <label htmlFor="Law Firm /Company Name">
                  Your Full Name: (for eSignature)
                </label>
                <input type="text" />
              </div>
              <div className="paf_input_container">
                <label htmlFor="Address">Your title</label>
                <input type="text" />
              </div>
            </div>

            <div className="paf_form_agree">
              <input type="checkbox" name="agree" id="agree" />
              <div>
                <label htmlFor="agree">
                  By checking this box and clicking on the 'submit' button
                  below, you are authorizing BK Attorney Services, LLC to handle
                  your mailings per the rules determined by the USPS under their
                  Domestic Mail Manual. Your check in this box constitutes your
                  electronic signature under the Uniform Electronic Transactions
                  Act ("EUTA"), the U.S. Esign Act of 2000, and for residents of
                  New York, Washington State, and Illinois, the Electronic
                  Signatures and Records Act ("ESRA"), RCW 19.34 (The Washington
                  Electronic Authentication Act), and 5 ICLS 175 (The Electronic
                  Commerce Security Act), respectively
                </label>
                <div
                  className="flex items-center flex-wrap"
                  style={{ gap: "20px", marginTop: "47px" }}
                >
                  <button className="paf_submit_btn">Submit PAF Form</button>
                  <button className="paf_clear_form_btn">Clear Form</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PostalAcknowledgmentForm;
