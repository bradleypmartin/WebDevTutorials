import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';  //'.js' added automatically

class App extends Component {
  
  state = {
    persons: [
      { name: 'Adam', age: 20},
      { name: 'Betty', age: 33},
      { name: 'Charlie', age: 48}
    ]
  }
  
  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // (DON'T DO THIS: MUTATE STATE) this.state.persons[0].name = 'Aaron';
    this.setState( {persons: [
        { name: newName, age: 20},
        { name: 'Emily', age: 33},
        { name: 'Fred', age: 48}
      ]}
    );
  }
  
  nameChangedHandler = (event) => {
    this.setState( {persons: [
        { name: 'Danny', age: 20},
        { name: event.target.value, age: 33},
        { name: 'Fred', age: 48}
      ]}
    );
  }
  
  render() {
    // experimenting with inline styles; has some restrictions 
    // and benefits with discussion to come soon
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      
      // note that we need to use 'className' since 'class' is a reserved JS string.
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('BigButton')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // bind syntax is preferred here (to BigButton switch syntax above)
          click={this.switchNameHandler.bind(this, 'PButton')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // Note how the nested 'createElement' code achieves the same effect as above.
    // BUT, usually we write the JSX code above.
    // return React.createElement('div', {className: 'App'}, 
    // React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
