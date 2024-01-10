import { useState } from "react";
import { iRadioIn, iRadioOut } from "../../utils/icons";

import img1 from "../../assets/images/start-mailing/radio1.png";
import img2 from "../../assets/images/start-mailing/radio2.png";
import img3 from "../../assets/images/start-mailing/radio3.png";

const SMFStep2 = () => {
  const [radio1, setRadio1] = useState(false);
  return (
    <div>
      <h1 className="smf2_title">HOW SHOULD WE PRINT YOUR DOCUMENTS?</h1>
      <p className="smf2_p">
        We are happy to simply mail your pages out one page per side. The cost
        for this is fifteen cents per page. You may PRE-REDUCE your document
        prior to upload by printing them two pages per side (2UP).If you reduce
        your pages beyond 2 per side, you run the risk of illegible printed
        documents. We will not guarantee readability for documents pre-reduced
        beyond two pages per side and you accept the risk of drawing an
        objection for improper service.
      </p>

      <div className="smf2_second_section">
        <div className="smf2_radio_container">
          <div onClick={() => setRadio1(!radio1)} className="">
            {radio1 ? iRadioIn : iRadioOut}
          </div>
          <div>
            <h1>I HAVE ALREADY REDUCED THE DOCUMENTS PRIOR TO UPLOAD!</h1>
            <p>THANK YOU FOR MAKING THAT EXTRA EFFORT!</p>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="smf2_radio_container">
          <div onClick={() => setRadio1(!radio1)} className="">
            {radio1 ? iRadioIn : iRadioOut}
          </div>
          <div>
            <h1>PRINT DOCUMENTS ONE PAGE PER SIDE OF SHEET</h1>
            <p>STANDARD SETTING</p>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="smf2_radio_container">
          <div onClick={() => setRadio1(!radio1)} className="">
            {radio1 ? iRadioIn : iRadioOut}
          </div>
          <div>
            <h1>PRINT DOCUMENTS TWO PAGES PERSIDE OF SHEET</h1>
            <p>
              SAVE POSTAGE EXPENSE BY HAVING US REDUCE THE DOCUMENTS FOR YOU!
            </p>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="smf2_radio_container">
          <div className="print_pricing">
            <p>
              *PRINT PRICING IS BASED UPON THE NUMBER OF LETTER SIZED PDF PAGE
              IMAGES UPLOADED AS INDICATED IN YOUR .PDF FILE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep2;
