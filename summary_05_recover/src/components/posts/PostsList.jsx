import React from "react";
import PostItem from "./PostItem";
import { postsApi } from "../../redux/slices/apiSlice";
import { Link } from "react-router-dom";

const EmptyDataStub = {
  data: [],
  isFetching: false,
  errorMessage: ''
};

export default function PostsList() {

  const postResponse = postsApi.useGetPostsQuery(undefined, {
    selectFromResult: ( response ) => {
      const result = {
        data: response.data || [],
        isFetching: response.isFetching,
        errorMessage: response.isError ? response.error.error : ''
      }
      return !!response ? result : EmptyDataStub
    },
  });


  return (
    <>
      {postResponse.isFetching ?
        <p>Please wait - we are loading posts!</p> :
        <div>
          {
            postResponse.data.map( postData => {
              return (
              <Link to={`/posts/${postData.id}`} key={postData.id}>
                <PostItem
                  title={postData.title}
                  body={postData.body}
                  id={postData.id}
                />
              </Link>
              )
            })
          }
        </div>
      }
      {postResponse.errorMessage && <p>{postResponse.errorMessage}</p>}
    </>
  );
}