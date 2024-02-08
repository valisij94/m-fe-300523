import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

export default function PostsList() {

  const { postsList, isFetching, errorMessage } = useSelector( state => state.posts);

  return (
    <>
      {isFetching ?
        <p>Please wait - we are loading posts!</p> :
        <div>
          {
            postsList.map( postData => {
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
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}