import { iLeft_array } from "../../utiles/icons";
import "../../styles/startMailing.css";
import { Link, useNavigate } from "react-router-dom";

const StartMailing = () => {
  const navigate = useNavigate();
  return (
    <div className="container start_mailing_container">
      <div onClick={() => navigate(-1)}>{iLeft_array}</div>

      <div className="start_mailing_btn_container">
        <h1>JURISDICTION SPECIFIC</h1>
        <Link to="/start-mailing/eastern-dist-california-bk">
          <button>EASTERN DIST. CALIFORNIA - BK</button>
        </Link>
      </div>

      <div className="start_mailing_btn_container">
        <h1>RETURNS A CERTIFICATE OF SERVICE</h1>
        <div className="flex items-center flex-wrap gap-4">
          <button>BANKRUPTCY CASE MAILING</button>
          <button>FEDERAL COURT MAILING</button>
          <button>STATE COURT MAILING</button>
          <button>MULTI CASE (10x) BK MAILING</button>
          <button>PROBATE ESTATE MAILING</button>
          <button>MULTI CASE UPLOAD</button>
          <button>ADVERSARY CASE MAILING</button>
        </div>
      </div>
      <div className="start_mailing_btn_container">
        <h1>RETURNS A PROOF OF MAILING</h1>
        <div className="flex items-center flex-wrap gap-4">
          <button>MAIL A LETTER</button>
          <button>DIRECT MAIL MARKETING</button>
        </div>
      </div>
    </div>
  );
};

export default StartMailing;
