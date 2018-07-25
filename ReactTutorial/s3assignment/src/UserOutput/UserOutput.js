// Here we'll create a UserOutput component for use in App.js.

import './UserOutput.css';

import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I'm {props.username}. It's nice to meet you!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default userOutput;