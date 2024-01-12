import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, SECRET_TOKEN } from "../../lib/global";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem(SECRET_TOKEN)}`;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["users", "jobs", "notifications"],
  endpoints: () => ({}),
});
