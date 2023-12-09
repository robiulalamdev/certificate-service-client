import React from "react";
import "../../styles/envelop.css";
import img1 from "../../assets/images/envelop/img1.png";
import img2 from "../../assets/images/envelop/img2.png";

const Envelop = () => {
  return (
    <div className="container envelop_container">
      <div className="envelop_banner">
        <h1 className="a_good_pres">A good presentation counts for a lot.</h1>
        <h4>
          Up your game with a professional noticing service and get noticed.
        </h4>
      </div>
      <div className="envelop_img">
        <img className="img-fluid" src={img1} alt="" />
      </div>

      <div className="envelop_play">
        <img className="img-fluid" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Envelop;
