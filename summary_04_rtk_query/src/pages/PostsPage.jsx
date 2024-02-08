import React from "react";
import PostsList from '../components/posts/PostsList.jsx'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postsErrorFetched, postsSuccessfullyFetched, startFetching } from "../redux/slices/postsSlice.js";

export default function PostsPage() {

  const dispatch = useDispatch();

  useEffect( () => {

    const fetchPosts = async () => {
      try {
        dispatch(startFetching());
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const postsData = await response.json();
        dispatch(postsSuccessfullyFetched(postsData));
      }
      catch (error) {
        dispatch(postsErrorFetched(error.message));
      }
    }
    fetchPosts();
  }, []);

  return (
    <PostsList />
  );
}