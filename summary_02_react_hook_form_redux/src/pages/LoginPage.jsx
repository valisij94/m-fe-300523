import React, { useState } from "react";
import Button from "../components/button/Button";
import { useSelector } from "react-redux";

export default function LoginPage() {

  const [formState, setFormState] = useState( {
    username: '',
    passwd: '',
  });

  const userName = useSelector(state => state.username);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState( (prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Please enter your credentials</p>
      <p>{`Hello, ${userName}`}</p>
      <form>
        <label htmlFor="username" />
        <input id="username" type="text" name="username" value={formState.username}
        onChange={handleInputChange}/>
        <label htmlFor="passwd" />
        <input id="passwd" type="password" name="passwd" value={formState.passwd} onChange={handleInputChange}/>
        <Button buttonText="Login" clickHandler={handleLogin} />
      </form>
    </div>
  );
}