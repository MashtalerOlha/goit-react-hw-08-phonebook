import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  
  keepUnusedDataFor: 5,
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => '/users/current',
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: '/users/logout',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authOperation;