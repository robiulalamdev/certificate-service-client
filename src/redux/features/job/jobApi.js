import { api } from "../../api/apiSlice";

const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addJob: builder.mutation({
      query: ({ data }) => ({
        url: `/jobs/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    getJobs: builder.query({
      query: () => `/jobs`,
      providesTags: ["jobs"],
    }),

    removeJob: builder.mutation({
      query: ({ id }) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
        body: {},
      }),
      invalidatesTags: ["jobs"],
    }),
  }),
});

export const { useAddJobMutation, useGetJobsQuery, useRemoveJobMutation } =
  jobApi;
