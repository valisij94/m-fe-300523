import React from "react";
import PostsList from '../components/posts/PostsList.jsx'
import { useEffect, useState } from "react";
import { useGetPostsQuery } from '../redux/slices/apiSlice.js';

export default function PostsPage() {

  useGetPostsQuery();

  return (
    <PostsList />
  );
}