import { useState } from "react";
const SMFStep3 = () => {
  return (
    <div>
      <h1 className="smf2_title">
        Describe and Attach your pdf documents for upload
      </h1>
      <p className="smf3_p">
        **DO NOT INCLUDE YOUR ADDRESS MAILING LIST IN THIS SECTION.ONLY YOUR
        DOCUMENTS FOR MAILING.WE WILL ASK FOR YOUR ADDRESSES BELOW.**
      </p>
      <p className="smf3_p_second">
        **ATTACH DOCUMENT IN THE ORDER YOU WANT THEM PRINTED (FRONT TO BACK -
        DOCUMENT 1 WILL BE AT THE FRONT, EVERYTHING WILL BE PRINTED BEHIND THE
        FIRST DOCUMENT)..**
      </p>

      <div className="smf3_form_section">
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">
              Describe Document 1: <span>(Required)*</span>
            </label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">
              Describe Document 2: <span>(Required)*</span>
            </label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 3:</label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 4:</label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 5:</label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 6:</label>
            <textarea
              name=""
              id=""
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">BALLOT (if any)</label>
            <input
              type="text"
              className="smf3_input"
              style={{ marginTop: "14px" }}
            />
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">PROOF OF CLAIM (if any</label>
            <input
              type="text"
              className="smf3_input"
              style={{ marginTop: "14px" }}
            />
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-100 choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                />
              </div>
              <input type="text" className="smf3_input" />
            </div>
          </div>
        </div>

        <div className="ballot_never">
          <p>
            **BALLOTS AND PROOF OF CLAIM WILL BE PRINTED AT BACK OF DOCUMENT
            SET.**
          </p>
          <p>
            **NEVER 2UP OR PRE-REDUCE YOUR BALLOTS OR PROOF OF CLAIM
            DOCUMENTS.**
          </p>
        </div>
      </div>
    </div>
  );
};

export default SMFStep3;
