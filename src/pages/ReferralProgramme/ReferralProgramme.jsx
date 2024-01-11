/* eslint-disable react/no-unescaped-entities */

import "../../styles/referralProgramme.css";

const ReferralProgramme = () => {
  return (
    <div className="container mb-5">
      <h1 className="referral_programme_title">
        Set / Edit / Review / Delete the default settings we use on YOUR
        computer.
      </h1>

      <form className="referral_programme_form">
        <section className="signature_block_section">
          <h1 className="signature_block_title">Signature Block</h1>
          <div className="referral_inputs">
            <div className="referral_input_container">
              <label htmlFor="Attorney Name">Attorney Name</label>
              <input name="attorney_name" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="bar_number">Bar Number</label>
              <input name="bar_number" type="number" />
            </div>

            <div className="referral_input_container">
              <label htmlFor="first_name">First Name</label>
              <input name="first_name" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="attorney_role">Attorney Role</label>
              <select name="" id="">
                <option selected value="Select one (Optional)">
                  Select one (Optional)
                </option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
              </select>
            </div>
            <div className="referral_input_container">
              <label htmlFor="address">address</label>
              <input name="address" type="text" />
            </div>
            <div
              className="flex items-end referral_input_container w-full"
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
              <label htmlFor="fax_number">Fax Number</label>
              <input name="fax_number" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="phone_number">PHONE NUMBER</label>
              <input name="phone_number" type="number" />
            </div>
          </div>
        </section>

        <section className="email_contact_section w-full">
          <h1 className="signature_block_title">E-mail contacts</h1>
          <div className="referral_inputs w-full">
            <div className="referral_input_container">
              <label htmlFor="primary_account_email">
                Primary account email
              </label>
              <input name="primary_account_email" type="email" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="additional_email_notice">
                ADDITIONAL EMAIL NOTICE
              </label>
              <input name="additional_email_notice" type="email" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="additional_email_notice">
                ADDITIONAL EMAIL NOTICE
              </label>
              <input name="additional_email_notice" type="email" />
            </div>
          </div>
        </section>

        <section className="email_contact_section w-full">
          <h1 className="signature_block_title">
            EMERGENCY CONTACT INFORMATION (FOR JOB CONTROL)
          </h1>
          <div className="referral_inputs w-full">
            <div className="referral_input_container">
              <label htmlFor="your_name">Your name</label>
              <input name="your_name" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="cell_phone_number">Cell phone number</label>
              <input name="cell_phone_number" type="number" />
            </div>
            <div className="check_box_container">
              <input type="checkbox" name="OK to Text" id="OK to Text" />
              <label htmlFor="OK to Text">OK to Text</label>
            </div>
          </div>
        </section>

        <section className="email_contact_section">
          <h1 className="signature_block_title">
            RETURN ADDRESS FOR YOUR ENVELOPES
          </h1>
          <div className="referral_inputs">
            <div className="referral_input_container">
              <label htmlFor="name">name</label>
              <input name="name" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="firm_name">Firm name</label>
              <input name="firm_name" type="text" />
            </div>

            <div className="referral_input_container">
              <label htmlFor="address">address</label>
              <input name="address" type="text" />
            </div>
            <div
              className="flex items-end referral_input_container w-full"
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
          </div>
        </section>

        <section className="email_contact_section">
          <h1 className="signature_block_title">
            FEDERAL AND BANKRUPTCY COURT JURISDICTION
          </h1>
          <div className="referral_inputs">
            <div className="referral_input_container">
              <label htmlFor="name">FEDERAL COURT DISTRICT</label>
              <select className="" name="" id="">
                <option selected value="Select one (Optional)">
                  Select one (Optional)
                </option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
              </select>
            </div>
            <div className="referral_input_container">
              <label htmlFor="firm_name">FEDERAL COURT STATE</label>
              <select className="" name="" id="">
                <option selected value="Select one (Optional)">
                  Select one (Optional)
                </option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
              </select>
            </div>
          </div>
        </section>

        <section className="email_contact_section">
          <h1 className="signature_block_title">STATE COURT JURISDICTION</h1>
          <div className="referral_inputs_1">
            <div className="referral_input_container">
              <label htmlFor="STATE COURT HEADER ONE">
                STATE COURT HEADER ONE
              </label>
              <input type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="STATE COURT HEADER TWO">
                STATE COURT HEADER TWO
              </label>
              <input type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="STATE COURT HEADER TWO">
                STATE COURT HEADER THREE
              </label>
              <input type="text" />
            </div>
            <div className="check_box_container">
              <input type="checkbox" name="check_here" id="check_here" />
              <label htmlFor="check_here">
                Check here to save the information in this form so you don't
                have to retype it the next time you are here.
              </label>
            </div>
          </div>
        </section>

        <div className="referral_form_btns">
          <button className="set_cookies_btn">Set and Remember Cookies</button>
          <button className="dc_btn">Delete Cookies</button>
          <button className="dc_btn">Close Window</button>
        </div>
      </form>
    </div>
  );
};

export default ReferralProgramme;
