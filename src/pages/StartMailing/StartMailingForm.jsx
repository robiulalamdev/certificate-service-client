/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SMFStep1 from "../../components/start-mailing-forms/SMFStep1";
import "../../styles/startMailingForm.css";
import SMFStep2 from "../../components/start-mailing-forms/SMFStep2";
import SMFStep3 from "../../components/start-mailing-forms/SMFStep3";
import SMFStep4 from "../../components/start-mailing-forms/SMFStep4";
import SMFStep5 from "../../components/start-mailing-forms/SMFStep5";
import SMFStep6 from "../../components/start-mailing-forms/SMFStep6";
import SMFStep7 from "../../components/start-mailing-forms/SMFStep7";
import SMFStep8 from "../../components/start-mailing-forms/SMFStep8";
import SMFStep9 from "../../components/start-mailing-forms/SMFStep9";
import SMFStep10 from "../../components/start-mailing-forms/SMFStep10";
import SMFStep11 from "../../components/start-mailing-forms/SMFStep11";
import SMFStep12 from "../../components/start-mailing-forms/SMFStep12";
import { useForm } from "react-hook-form";

const StartMailingForm = () => {
  // const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    setFocus,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const [document_1, setDocument_1] = useState(null);
  const [document_2, setDocument_2] = useState(null);
  const [document_3, setDocument_3] = useState(null);
  const [document_4, setDocument_4] = useState(null);
  const [document_5, setDocument_5] = useState(null);
  const [document_6, setDocument_6] = useState(null);
  const [ballot, setBallot] = useState(null);
  const [proof_of_claim, setProof_of_claim] = useState(null);

  // form 7
  const [ownMailingFile, setOwnMailingFile] = useState(null);

  const handleSave = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto pb-5" style={{ minHeight: "100vh" }}>
      {/* {step > 1 && (
        <div
          className="flex justify-end"
          style={{ marginTop: "37px" }}
        >
          <div className="smf1_cancel_upload_btn">Cancel Upload</div>
        </div>
      )} */}
      <form
        onSubmit={handleSubmit(handleSave)}
        className="grid grid-cols-1 gap-y-[60px]"
      >
        <SMFStep1
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep2
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep3
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
          setDocument_1={setDocument_1}
          document_1={document_1}
          setDocument_2={setDocument_2}
          document_2={document_2}
          setDocument_3={setDocument_3}
          document_3={document_3}
          setDocument_4={setDocument_4}
          document_4={document_4}
          setDocument_5={setDocument_5}
          document_5={document_5}
          setDocument_6={setDocument_6}
          document_6={document_6}
          setBallot={setBallot}
          ballot={ballot}
          setProof_of_claim={setProof_of_claim}
          proof_of_claim={proof_of_claim}
        />
        <SMFStep4
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep5
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep6
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep7
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
          setOwnMailingFile={setOwnMailingFile}
          ownMailingFile={ownMailingFile}
        />
        <SMFStep8
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep9
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep10
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMFStep11
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />

        <SMFStep12
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
      </form>

      <div className="flex items-center justify-center w-full">
        <button className="smf_btn">Submit</button>
        {/* {step === 11 ? (
          <button className="smf_btn">Submit</button>
        ) : (
          <div onClick={() => setStep(step + 1)} className="smf_btn">
            Next
          </div>
        )} */}
      </div>
    </div>
  );
};

export default StartMailingForm;
