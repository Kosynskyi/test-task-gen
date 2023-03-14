import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, TOKEN } from 'helpers/constants';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` },
  }),
  endpoints: builder => ({
    getAllCourses: builder.query({
      query: () => `/core/preview-courses`,
    }),
  }),
});

export const { useGetAllCoursesQuery } = courseApi;
