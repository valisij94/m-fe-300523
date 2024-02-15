import React from "react";
import Button from "../components/button/Button";

import { useSelector } from 'react-redux';

export default function Home() {

  const { name, username } = useSelector( state => state.user );
  return (
    <div>
      <h1>The Best Social Network</h1>
      <p>Lorem ipsum..</p>
      <p>{`Hello, ${name}, your user name is ${username}`}</p>
      <Button buttonText='Login'/>
      <Button buttonText='Register'/>
    </div>
  );
}