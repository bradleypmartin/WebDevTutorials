import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';  //'.js' added automatically
import UserOutput from './UserOutput/UserOutput';  //'.js' added automatically

class App extends Component {
  
  state = {
    userOutputs: [
      { username: 'Adam'},
      { username: 'Betty'},
      { username: 'Charlie'}
    ]
  }
  
  nameChangedHandler = (event) => {
    this.setState( {userOutputs: [
        { username: event.target.value},
        { username: event.target.value},
        { username: event.target.value}
      ]}
    );
  }
  
  render() {
    
    const appStyle = {
      backgroundColor: '#ffe',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App" style={appStyle}>
        
        <h1>Here's the start of my Section 3 assignment.</h1>
        
        <p>Below this, you'll see the UserInput component and then multiple
        UserOutput components.</p>
        
        <p>Any change to the text input will alter all
        three usernames (UserOutputs) below it. The hobbies of all users are
        created with props.children.</p>
        
        <UserInput username={this.state.userOutputs[0].username} 
        changed={this.nameChangedHandler}/>
        
        <UserOutput 
          username={this.state.userOutputs[0].username}
          changed={this.nameChangedHandler}>I like to dance.
        </UserOutput>
        <UserOutput
          username={this.state.userOutputs[1].username}
          changed={this.nameChangedHandler}>I like to run.
        </UserOutput>
        <UserOutput 
          username={this.state.userOutputs[2].username}
          changed={this.nameChangedHandler}>I like to play piano.
        </UserOutput>
          
      </div>
    );
  }
}

export default App;
