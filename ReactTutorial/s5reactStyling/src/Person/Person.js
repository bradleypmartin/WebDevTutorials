// Here we'll create a Person component like we did in the CodePen for the intro lectures.

import classes from './Person.css';
import React from 'react';

const person = ( props ) => {

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;