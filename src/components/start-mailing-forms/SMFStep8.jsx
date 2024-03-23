/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import SMStep8FormSection from "./SMStep8FormSection";

const SMFStep8 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="smf4_title mt-4">
        MANUAL ENTRY OF ADDITIONAL ADDRESSES <br /> FOR THIS PARTICULAR MAILING
      </h1>
      <div className="flex items-center gap-[7px] text-[#0055A3] text-[18px] md:text-[30px] font-semibold font-outfit mt-[68px]">
        <input
          {...register(
            "manual_entry_of_additional_addresses.address_providing",
            {
              required: false,
            }
          )}
          onChange={(e) =>
            setValue(
              "manual_entry_of_additional_addresses.address_providing",
              e.target.checked
            )
          }
          className="size-[34px]"
          type="checkbox"
        />
        <p>
          PLEASE USE THE MANUALLY ENTERED ADDRESSES THAT I AM PROVIDING BELOW.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[50px] mt-[60px]">
        <SMStep8FormSection
          number="01"
          name="additional_address_1"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMStep8FormSection
          number="02"
          name="additional_address_2"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMStep8FormSection
          number="03"
          name="additional_address_3"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMStep8FormSection
          number="04"
          name="additional_address_4"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMStep8FormSection
          number="05"
          name="additional_address_5"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
        <SMStep8FormSection
          number="06"
          name="additional_address_6"
          register={register}
          control={control}
          setValue={setValue}
          setError={setError}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
        />
      </div>
    </div>
  );
};

export default SMFStep8;
