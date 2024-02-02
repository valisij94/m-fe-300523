import React, { useState } from "react";

import classes from './RegisterPage.module.css';
import Button from "../components/button/Button";

import { useForm } from 'react-hook-form';


export default function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleRegistration = (formData) => {
    console.log('Form Data', formData);
  }

  return (
    <div>
      <h1>RegisterPage</h1>
      <form
        className={classes.registerForm}
        onSubmit={handleSubmit(handleRegistration)}
      >
        <label htmlFor="username">Login</label>
        <input
          id="username"
          type="text"
          { ...register('username', {
            required: "Please, fill username!",
            minLength: {
              value: 3,
              message: 'Too short!'
            },
            maxLength: {
              value: 12,
              message: 'Too long!'
            }
          } ) }
        />
        { errors?.username &&
          <p className={classes.errorField}>{errors.username.message}</p>
        }
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          { ...register('password', { required: true }) }
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          { ...register('name', { required: true }) }
        />
        <Button buttonText="Register" />
      </form>
    </div>
  );
}