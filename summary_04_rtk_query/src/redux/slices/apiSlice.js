import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`
    })
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;