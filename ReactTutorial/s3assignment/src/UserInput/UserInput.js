// Here we'll create a UserInput component and export for use in App.js.

import './UserInput.css';

import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text"
            value={props.username}
            onChange={props.changed}/>
            <p>Alter the text in this box to change all 3 usernames below.</p>
        </div>
    );
};

export default userInput;