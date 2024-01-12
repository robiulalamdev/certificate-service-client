/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const SMFStep3 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
  setDocument_1,
  setDocument_2,
  setDocument_3,
  setDocument_4,
  setDocument_5,
  setDocument_6,
  setBallot,
  setProof_of_claim,

  // values
  document_1,
  document_2,
  document_3,
  document_4,
  document_5,
  document_6,
  ballot,
  proof_of_claim,
}) => {
  // console.log(watch("pdf_documents.document_1.attach"));
  // console.log(document_1);
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
              {...register("pdf_documents.document_1.describe_document", {
                required: true,
              })}
              required
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  // {...register("pdf_documents.document_1.attach", {
                  //   required: true,
                  // })}
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_1(e.target.files[0])}
                  required
                />
              </div>
              <input
                type="text"
                value={document_1?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_1.ecf_docket_reference_number",
                  {
                    required: true,
                  }
                )}
                required
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">
              Describe Document 2: <span>(Required)*</span>
            </label>
            <textarea
              {...register("pdf_documents.document_2.describe_document", {
                required: true,
              })}
              required
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_2(e.target.files[0])}
                  required
                />
              </div>
              <input
                type="text"
                value={document_2?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_2.ecf_docket_reference_number",
                  {
                    required: true,
                  }
                )}
                required
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 3:</label>
            <textarea
              {...register("pdf_documents.document_3.describe_document", {
                required: false,
              })}
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_3(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={document_3?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_3.ecf_docket_reference_number",
                  {
                    required: false,
                  }
                )}
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 4:</label>
            <textarea
              {...register("pdf_documents.document_4.describe_document", {
                required: false,
              })}
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_4(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={document_4?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_4.ecf_docket_reference_number",
                  {
                    required: false,
                  }
                )}
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 5:</label>
            <textarea
              {...register("pdf_documents.document_5.describe_document", {
                required: false,
              })}
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_5(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={document_5?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_5.ecf_docket_reference_number",
                  {
                    required: false,
                  }
                )}
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">Describe Document 6:</label>
            <textarea
              {...register("pdf_documents.document_6.describe_document", {
                required: false,
              })}
              placeholder="| Fully describe the document that will be mailed.  85 Character Limit. "
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach .pdf/ .doc file</label>
            <div className="smf3_choose_file_container">
              <div className="smf3_file_input">
                <p>Choose File</p>
                <input
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setDocument_6(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={document_6?.name}
                className="smf3_input px-1"
              />
            </div>
            <div className="smf3_last_input_container">
              <label htmlFor="">ECF Docket Reference Number</label>
              <input
                {...register(
                  "pdf_documents.document_6.ecf_docket_reference_number",
                  {
                    required: false,
                  }
                )}
                type="text"
                className="smf3_input"
              />
            </div>
          </div>
        </div>

        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">BALLOT (if any)</label>
            <input
              {...register("pdf_documents.ballot.describe", {
                required: false,
              })}
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
                  // {...register("pdf_documents.ballot.attach", {
                  //   required: false,
                  // })}
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setBallot(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={ballot?.name}
                className="smf3_input px-1"
              />
            </div>
          </div>
        </div>
        <div className="smf3_input_container">
          <div>
            <label htmlFor="describe1">PROOF OF CLAIM (if any</label>
            <input
              {...register("pdf_documents.proof_of_claim.describe", {
                required: false,
              })}
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
                  // {...register("pdf_documents.proof_of_claim.attach", {
                  //   required: false,
                  // })}
                  className="w-full choose_file"
                  type="file"
                  accept=".pdf, .doc"
                  multiple={false}
                  onChange={(e) => setProof_of_claim(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                value={proof_of_claim?.name}
                className="smf3_input px-1"
              />
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
