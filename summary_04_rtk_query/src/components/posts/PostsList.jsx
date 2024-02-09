import React from "react";
import PostItem from "./PostItem";
import { postsApi } from "../../redux/slices/apiSlice";

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
              return <PostItem
                key={postData.id}
                title={postData.title}
                body={postData.body}
                id={postData.id}
              />
            })
          }
        </div>
      }
      {postResponse.errorMessage && <p>{postResponse.errorMessage}</p>}
    </>
  );
}