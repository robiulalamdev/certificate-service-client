import { useState } from "react";
import SelectDropdown from "../commons/SelectDropdown";

const SMFStep4 = () => {
  const [radio1, setRadio1] = useState(false);
  return (
    <div>
      <h1 className="smf4_title">Signature Block for Certificate</h1>

      <div>
        <h1 className="smf4_signature_title">/s/ Attorney ECF Signature</h1>
        <div className="ecf_signatures">
          <div className="ecf_signature_input_container">
            <label htmlFor="">
              Attorney Name <span>**</span>
            </label>
            <input type="text" className="w331" />
          </div>
          <div
            className="ecf_signature_input_container"
            style={{ width: "167px" }}
          >
            <label htmlFor="">Bar Number</label>
            <input type="text" />
          </div>
          <div className="ecf_signature_input_container">
            <p>
              OPTIONAL LINE TO INCLUDE EMAIL OR YOUR ROLE IN THE CASE <br />
              Information in this field is dependant upon your local rules.
            </p>
            <SelectDropdown
              selected=""
              setSelected=""
              items={["CALIFORNIA"]}
              className="ecf_signature_dropdowns w331"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep4;
