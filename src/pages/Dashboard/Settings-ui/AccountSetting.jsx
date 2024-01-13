/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { iUploadImg } from "../../../utils/icons";
import {
  useGetAuthQuery,
  useImageUpdateMutation,
  usePatchUserInfoByIdMutation,
  useUpdateUserInfoMutation,
} from "../../../redux/features/auth/authApi";
import {
  Button,
  Dialog,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { SpinnerCircularFixed } from "spinners-react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../lib/global";
import { iSetEdit } from "../../../utiles/icons";
import { Controller, useForm } from "react-hook-form";
import { countryPhoneCodes } from "../../../utils/phoneNumbers";
import useInputPattern from "../../../lib/hooks/useInputPattern";

const AccountSetting = () => {
  const { data } = useGetAuthQuery();
  const [imageUpdate, { isLoading }] = useImageUpdateMutation();
  const [updateUserInfo, { isLoading: patchLoading }] =
    useUpdateUserInfoMutation();
  const [imgFile, setImgFile] = useState(null);
  const { handleNumber } = useInputPattern();

  const {
    handleSubmit,
    register,
    watch,
    setError,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const imgRef = useRef();

  const handleSave = async () => {
    const formData = new FormData();
    if (imgFile) {
      formData.append("image", imgFile);
    }
    const options = {
      data: formData,
    };
    const result = await imageUpdate(options);
    if (result?.data?.success) {
      setImgFile(null);
      toast.success("Profile Image Save Success");
    } else {
      toast.error("Profile Image Save Failed!");
    }
    setImgFile(null);
    imgRef.current.value = null;
  };

  const handleUpdate = async (data) => {
    const options = {
      data: data,
    };
    const result = await updateUserInfo(options);
    if (result?.data?.success) {
      toast.success("Profile Info Update Success");
    } else {
      if (result?.data?.type === "username") {
        setError("username", "username already in use");
      }
      toast.error("Profile Info Update Failed!");
    }
  };

  const handleReset = () => {
    setValue("full_name", data?.full_name);
    // setValue("email", data?.email);
    setValue("username", data?.username);
    setValue("phone.code", data?.phone?.code);
    setValue("phone.number", data?.phone?.number);
  };

  useEffect(() => {
    handleReset();
  }, [data]);

  console.log(errors);

  return (
    <>
      <div>
        <h1 className="ypp_title">Your Profile Picture</h1>
        <div className="accountImgUpload_container relative overflow-hidden">
          {data?.image ? (
            <>
              <img src={`${BASE_URL}/uploads/${data?.image}`} />
              <div
                onClick={() => imgRef.current.click()}
                size="xs"
                className="bg-primaryDark text-white cursor-pointer size-[35px] pl-1 pt-1 absolute bottom-0 right-0 rounded-r-[17.366px] rounded-t-none rounded-b-none rounded-tl-md"
              >
                <div className="size-[10px]">{iSetEdit}</div>
              </div>
            </>
          ) : (
            <>
              {iUploadImg}
              <p>Upload your photo</p>
              <input
                onChange={(e) => setImgFile(e.target.files[0])}
                className="opacity-0 w-full h-full absolute top-0 bottom-0 right-0 left-0 cursor-pointer"
                type="file"
                accept=".png, .jpg, .jpeg"
                multiple={false}
              />
            </>
          )}
          <input
            ref={imgRef}
            onChange={(e) => setImgFile(e.target.files[0])}
            className="hidden"
            type="file"
            accept=".png, .jpg, .jpeg"
            multiple={false}
          />
        </div>

        <div className="w-full setting_hr"></div>
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="account_setting_form_container"
        >
          <div className="account_setting_input_container">
            <label htmlFor="Full_name">Full name</label>
            <input
              {...register("full_name", { required: true })}
              type="text"
              className=""
              placeholder="Please enter your full name"
            />
            {errors?.full_name && (
              <i className="text-red-600 text-sm">* Full Name is Required</i>
            )}
          </div>
          <div className="account_setting_input_container">
            <label htmlFor="Email">Email</label>
            <input
              // {...register("email", {
              //   required: "Email is required",
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              //     message: "Invalid email format",
              //   },
              // })}
              type="email"
              readOnly
              value={data?.email}
              className=""
              placeholder="Please enter your email"
            />
            {errors?.email && (
              <i className="text-red-600 text-sm">* {errors?.email?.message}</i>
            )}
          </div>
          <div className="account_setting_input_container">
            <label htmlFor="Username">Username</label>
            <input
              {...register("username", { required: false })}
              type="text"
              className=""
              placeholder="Please enter your username"
            />
            {errors?.username && (
              <i className="text-red-600 text-sm">
                * {errors?.username?.message}
              </i>
            )}
          </div>
          <div className="account_setting_input_container">
            <label htmlFor="Phone_number">Phone number</label>
            <div className="account_setting_input_container flex items-center">
              <Controller
                name="phone.code"
                control={control}
                render={({ field }) => (
                  <Popover placement="bottom-start">
                    <PopoverHandler>
                      <Button
                        className={`accouont_setting_phone_select bg-[#edf2f6] max-w-[80px] p-0 w-full mr-1 shadow-none hover:shadow-none normal-case text-[#8d98aa] font-normal`}
                      >
                        {watch("phone.code") || (
                          <span className="text-[#979CA5]"></span>
                        )}
                      </Button>
                    </PopoverHandler>
                    <PopoverContent className="grid grid-cols-1 max-w-fit max-h-[350px] overflow-y-auto w-full p-0 shadow-none">
                      {countryPhoneCodes?.map((item, i) => (
                        <Button
                          onClick={() => setValue("phone.code", item?.code)}
                          key={i}
                          className="h-8 bg-white text-black hover:!bg-primary rounded-none hover:!text-white shadow-none border-none normal-case text-left outline-none px-3 py-0 font-normal flex items-center gap-2"
                        >
                          <div className="min-w-[40px]">{item?.code}</div>{" "}
                          <span>{item?.country}</span>
                        </Button>
                      ))}
                    </PopoverContent>
                  </Popover>
                )}
              />
              <input
                {...register("phone.number", { required: false })}
                type="number"
                onInput={handleNumber}
                className="flex-grow border-start-0"
                placeholder="Please enter your phone number"
              />
            </div>
            {errors?.phone && (
              <i className="text-red-600 text-sm">* Phone Number is Required</i>
            )}
          </div>

          <div className="update_profile_btns_container">
            <button
              type="submit"
              className="update_profile_btn flex justify-center items-center gap-2"
            >
              {patchLoading && (
                <SpinnerCircularFixed
                  size={25}
                  thickness={170}
                  speed={350}
                  color="white"
                  secondaryColor="rgba(124, 57, 172, 0.19)"
                />
              )}
              Update Profile
            </button>
            <div
              onClick={() => handleReset()}
              className="update_profile_reset_btn hover:bg-red-100 px-4 h-[47.275px] flex justify-center items-center rounded"
            >
              Reset
            </div>
          </div>
        </form>
      </div>
      <Dialog
        open={imgFile ? true : false}
        handler={() => setImgFile(null)}
        size="xs"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 py-8 px-2">
          {imgFile && (
            <img
              className="max-w-[150px] max-h-[150px] md:max-w-[250px] md:max-h-[250px] w-full h-full object-contain"
              src={URL.createObjectURL(imgFile)}
              alt=""
            />
          )}
          <h1 className="text-xl font-bold text-gray-900 leading-[22px] font-outfit text-center">
            Are you sure
          </h1>
          <p className="text-center text-sm text-gray-600">
            you want to Save this Image?
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button
              onClick={() => {
                setImgFile(null);
                imgRef.current.value = null;
              }}
              className="h-12 min-w-[100px] w-full shadow-none hover:shadow-none rounded normal-case bg-white hover:bg-red-100 border text-black font-outfit text-base"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSave()}
              className="h-12 w-full min-w-[120px] shadow-none hover:shadow-none text-white rounded normal-case bg-red-600 font-outfit text-base flex justify-center items-center gap-2"
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
              Save
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AccountSetting;
