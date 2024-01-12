import { api } from "../../api/apiSlice";

const notificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => `/notifications`,
      providesTags: ["notifications"],
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
