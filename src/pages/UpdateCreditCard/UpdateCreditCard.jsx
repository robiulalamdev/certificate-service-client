/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../styles/updateCreditCard.css";
import useYears from "../../lib/hooks/useYears";
import { numberMonths } from "../../utils/data";

const UpdateCreditCard = () => {
  const { years } = useYears();

  return (
    <div className="container mb-5">
      <h1 className="update_credit_card_title">Update Credit card</h1>

      <form className="referral_programme_form">
        <section className="signature_block_section">
          <div className="referral_inputs">
            <div className="referral_input_container">
              <label htmlFor="name_on_card">Name on Card</label>
              <input name="name_on_card" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="Billing Phone">Billing Phone</label>
              <input name="Billing Phone" type="number" />
            </div>

            <div className="referral_input_container">
              <label htmlFor="Billing Address Number">
                Billing Address Number
              </label>
              <input name="Billing Address Number" type="text" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="Billing Zip Code">Billing Zip Code</label>
              <input name="Billing Zip Code" type="number" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="Credit Card Number">Credit Card Number</label>
              <input name="Credit Card Number" type="number" />
            </div>
            <div className="referral_input_container">
              <label htmlFor="Credit Card Type">Credit Card Type</label>
              <select name="" id="">
                <option selected value="Select one">
                  Select one
                </option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
                <option value="option 1">option 1</option>
              </select>
            </div>

            <div
              className="flex items-end flex-wrap w-full col_span_2 referral_input_container"
              style={{ gap: "28px" }}
            >
              <div>
                <label htmlFor="zip">Expiration Date</label>
                <div className="flex items-end w-full" style={{ gap: "28px" }}>
                  <select className="small_input" style={{ minWidth: "115px" }}>
                    {numberMonths.map((m, index) => (
                      <option key={index} value={m.number}>
                        {m?.number}
                      </option>
                    ))}
                  </select>
                  <select className="small_input" style={{ minWidth: "115px" }}>
                    {years.map((y, index) => (
                      <option key={index} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full" style={{ maxWidth: "486px" }}>
                <label htmlFor="fax_number">Fax Number</label>
                <input name="fax_number" type="text" />
              </div>
            </div>
          </div>
        </section>

        <div className="update_credit_card_form_btns">
          <button className="update_card_btn">Update Credit Card</button>
          <button className="clear_form_btn">Clear form</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCreditCard;
