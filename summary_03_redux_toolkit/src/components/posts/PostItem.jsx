import React from "react";

export default function PostItem( {id, title, body} ) {

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}