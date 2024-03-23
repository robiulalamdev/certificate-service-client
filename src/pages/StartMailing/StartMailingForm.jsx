/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import { useAddJobMutation } from "../../redux/features/job/jobApi";
import { toast } from "react-toastify";
import { SpinnerCircularFixed } from "spinners-react";
import { useNavigate } from "react-router-dom";

const StartMailingForm = () => {
  const [addJob] = useAddJobMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    setFocus,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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

  const handleSave = async (data) => {
    setIsLoading(true);
    const formData = new FormData();

    if (document_1) {
      formData.append("document_1", document_1);
    }
    if (document_2) {
      formData.append("document_2", document_2);
    }
    if (document_3) {
      formData.append("document_3", document_3);
    }
    if (document_4) {
      formData.append("document_4", document_4);
    }
    if (document_5) {
      formData.append("document_5", document_5);
    }
    if (document_6) {
      formData.append("document_6", document_6);
    }
    if (ballot) {
      formData.append("ballot", ballot);
    }
    if (proof_of_claim) {
      formData.append("proof_of_claim", proof_of_claim);
    }
    if (ownMailingFile) {
      formData.append("own_mailing_list_file", ownMailingFile);
    }
    if (data) {
      formData.append("data", JSON.stringify(data));
    }
    const options = {
      data: formData,
    };
    const result = await addJob(options);
    // console.log(result);
    if (result?.data?.success) {
      toast.success("Mail Send Successfully");
      reset();
      navigate("/dashboard");
    } else {
      toast.error("Mail Send Failed!");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSave)}
      className="container mx-auto pb-5"
      style={{ minHeight: "100vh" }}
    >
      {/* {step > 1 && (
        <div
          className="flex justify-end"
          style={{ marginTop: "37px" }}
        >
          <div className="smf1_cancel_upload_btn">Cancel Upload</div>
        </div>
      )} */}
      <div className="grid grid-cols-1 gap-y-[60px]">
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
      </div>

      <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          className="smf_btn max-w-fit px-2 flex justify-center items-center gap-2"
        >
          {isLoading && (
            <SpinnerCircularFixed
              size={25}
              thickness={170}
              speed={350}
              color="white"
              secondaryColor="rgba(124, 57, 172, 0.19)"
            />
          )}
          Submit
        </button>
        {/* {step === 11 ? (
          <button className="smf_btn">Submit</button>
        ) : (
          <div onClick={() => setStep(step + 1)} className="smf_btn">
            Next
          </div>
        )} */}
      </div>
    </form>
  );
};

export default StartMailingForm;
