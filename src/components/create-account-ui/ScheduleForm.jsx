/* eslint-disable react/prop-types */
const ScheduleForm = ({ formStep, setFormStep }) => {
  const handleForm = () => {
    setFormStep(formStep + 1);
  };

  return (
    <div
      className={`flex justify-center mt-5 ${
        formStep === 5 ? "d-block" : "d-none"
      }
    `}
    >
      <button onClick={() => handleForm()} className="next_btn">
        Next
      </button>
    </div>
  );
};

export default ScheduleForm;
