import React from "react";
import classes from './Button.module.css';

export default function Button( {clickHandler, buttonText, disabled} ) {

  return (
    <button
      className={classes.filledButton}
      onClick={clickHandler} disabled={disabled}>
      {buttonText}
    </button>
  );
}