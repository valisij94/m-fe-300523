import React, { useState } from "react";

import classes from './RegisterPage.module.css';
import Button from "../components/button/Button";

export default function RegisterPage() {

  const [formState, setFormState] = useState( {
    username: '',
    password: '',
    name: '',
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify( {
            name: formState.name,
            username: formState.username
          } )
        }
      );

      if (!response.ok) {
        throw new Error(`Something went wrong! ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    }
    catch (error) {
      console.log("Error" + error);
    }
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
      <h1>RegisterPage</h1>
      <form className={classes.registerForm}>
        <label htmlFor="username">Login</label>
        <input id="username" type="text" name="username" value={formState.username}
        onChange={handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={formState.password} onChange={handleInputChange}/>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={formState.name} onChange={handleInputChange}/>
        <Button buttonText="Register" clickHandler={handleLogin} />
      </form>
    </div>
  );
}