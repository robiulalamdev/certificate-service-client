import "../../styles/createAccount.css";
import { useState } from "react";
import OrganizationInfoForm from "../../components/create-account-ui/OrganizationInfoForm";
import AccountContactInfoForm from "../../components/create-account-ui/AccountContactInfoForm";
import RegistrationCodeForm from "../../components/create-account-ui/RegistrationCodeForm";
import AddPaymentForm from "../../components/create-account-ui/AddPaymentForm";
import ScheduleForm from "../../components/create-account-ui/ScheduleForm";
import AboutUsInfoForm from "../../components/create-account-ui/AboutUsInfoForm";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formStep, setFormStep] = useState(1);
  const [agre, setAgre] = useState(false);
  return (
    <div className="container">
      <div className="ca_banner">
        {formStep !== 7 && <h1 className="ca_page_title">Create an Account</h1>}
        {formStep === 7 && (
          <h6 className="ca_form_sub_title">
            <u>User Agreement</u>
          </h6>
        )}
        {formStep === 1 && (
          <h6 className="ca_form_sub_title">
            Organization Information <span>(Required*)</span>
          </h6>
        )}
        {formStep === 2 && (
          <h6 className="ca_form_sub_title">
            Account Contact Information <span>(Required*)</span>
          </h6>
        )}
        {formStep === 3 && (
          <h6 className="ca_form_sub_title">
            Enter your Registration Code or Coupon Code
          </h6>
        )}
        {formStep === 4 && (
          <h6 className="ca_form_sub_title">
            Add a payment method <span>(Required*)</span>
          </h6>
        )}
        {formStep === 5 && (
          <h6 className="ca_form_sub_title">Schedule your training session</h6>
        )}
        {formStep === 6 && (
          <h6 className="ca_form_sub_title">How did you hear about us?</h6>
        )}

        {formStep === 3 && (
          <p className="ca_description">
            We often provide registration codes to new registrants who met us at
            various trade shows or promotional events. If you have one of these
            codes, please enter it in the field below. We will provide you with
            an instant account printing cost credit which you can use to offset
            the expense of your mailings.
          </p>
        )}
        {formStep === 4 && (
          <p className="ca_description">
            If the whole idea of using CertificateofService.com is to make your
            life easier and more convenient, then it makes complete sense for us
            to train you and your staff on how to use our amazing mailroom
            system. We currently use the Zoom platform for training. Tell us how
            many people we need to train and we will contact you to arrange the
            conference.
          </p>
        )}
        {formStep === 5 && (
          <p className="ca_description">
            As we are an ala carte service, we charge your credit card only when
            we have completed a mailing on your behalf. You must put a valid
            card on account or we cannot processing your mailings. We do not
            accept payments from the bankruptcy estate unless you have received
            approval from the court that we are the designated notice provider
            in the case. Our relationship is one business to another business.
          </p>
        )}
        {formStep === 6 && (
          <p className="ca_description">
            Help us to understand where to best allocate our limited resources
            for marketing and new client recruitment. The more we grow, the more
            we are able to leverage our purchasing and buying power to keep our
            costs low. Spent a moment letting us know how you heard about us, do
            we can further refine our marketing strategy!
          </p>
        )}
        {formStep === 7 && (
          <p className="ca_description">
            By checking this box, you are certifying that you (i) have reviewed
            the User Agreement, the Privacy Notice and the Website Terms of Use
            agreement and (ii) and agree to be bound by the terms set forth
            therein as well as (iii) you agree to pay your invoice in accordance
            with the terms set forth in your credit card agreement or by other
            means established with BK Attorney Services, LLC. You further
            understand that once the certificate has been released there are no
            refunds or returns.
          </p>
        )}
      </div>

      <section className="ca_input_form_container">
        <OrganizationInfoForm formStep={formStep} setFormStep={setFormStep} />
        <AccountContactInfoForm formStep={formStep} setFormStep={setFormStep} />
        <RegistrationCodeForm formStep={formStep} setFormStep={setFormStep} />
        <AddPaymentForm formStep={formStep} setFormStep={setFormStep} />
        <ScheduleForm formStep={formStep} setFormStep={setFormStep} />
        <AboutUsInfoForm formStep={formStep} setFormStep={setFormStep} />
        <div className={`${formStep === 7 ? "d-block" : "d-none"}`}>
          <div
            onClick={() => setAgre(!agre)}
            className="cursor-pointer d-flex align-items-center gap-2 mt-4"
          >
            <input className="ca_agre_input" type="checkbox" checked={agre} />
            <p className="ca_agre">
              I have reviewed and agree to be bound by the{" "}
              <Link to="/terms-and-conditions">terms and conditions</Link>
              set forth in the User Agreement.
            </p>
          </div>

          <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center gap-4 pt-5">
            <button className="cra_ac_btn">Create your account</button>
            <button className="clear_form_btn">Clear</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
