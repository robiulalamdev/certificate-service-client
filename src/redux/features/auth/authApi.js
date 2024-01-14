import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postRegister: builder.mutation({
      query: ({ data }) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    postLogin: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    imageUpdate: builder.mutation({
      query: ({ data }) => ({
        url: `/users/update/image`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    getAuth: builder.query({
      query: () => `/users/user-info/me`,
      providesTags: ["users"],
    }),

    postForgotPassword: builder.mutation({
      query: ({ data }) => ({
        url: `/users/forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    postChangePassword: builder.mutation({
      query: ({ data }) => ({
        url: `/users/password/change-password`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "turkey-trade-market"
          )}`,
        },
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation({
      query: () => ({
        url: `/users/remove/all-data`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "turkey-trade-market"
          )}`,
        },
      }),
      invalidatesTags: ["users"],
    }),

    handleOtp: builder.mutation({
      query: ({ data }) => ({
        url: `/users/verifyEmail`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    handleResendOtp: builder.mutation({
      query: ({ data }) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    checkEmail: builder.mutation({
      query: ({ data }) => ({
        url: `/users/check-email`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    patchUserInfoById: builder.mutation({
      query: ({ data, id }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateUserInfo: builder.mutation({
      query: ({ data }) => ({
        url: `/users/update/info`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // change/forgot-password step 1
    forgotPassword: builder.mutation({
      query: ({ data }) => ({
        url: `/users/change/forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  usePostRegisterMutation,
  usePostLoginMutation,
  useImageUpdateMutation,
  useUpdateUserInfoMutation,
  useGetAuthQuery,

  usePostForgotPasswordMutation,
  usePostChangePasswordMutation,
  useDeleteUserMutation,
  useHandleOtpMutation,
  useHandleResendOtpMutation,
  useCheckEmailMutation,
  usePatchUserInfoByIdMutation,

  // forgotPassword
  useForgotPasswordMutation,
} = authApi;
