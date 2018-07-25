import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';  //'.js' added automatically

class App extends Component {
  
  state = {
    persons: [
      { id: 'aaa1', name: 'Adam', age: 20},
      { id: 'aaa2', name: 'Betty', age: 33},
      { id: 'aaa3', name: 'Charlie', age: 48}
    ],
    showPersons: false
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    /* once again: best practice is to use spread operator (or equiv) and
    work with copies */
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} );
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); /* deep copy: good practice! */
    /* another option: const persons = [...this.state.persons]; (spread operator) */
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
    
    // Here's a clearer, cleaner way of implementing a toggle-list
    // (using a variable defined BEFORE the return statement)
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Note that single "curly braces" delimit pure JS */}
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    
    return (
      
      // note that we need to use 'className' since 'class' is a reserved JS string.
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          /*onClick={() => this.switchNameHandler('BigButton')}*/
          onClick={() => this.togglePersonsHandler()}
          >Toggle Persons</button>
          {persons}
      </div>
    );
    // Note how the nested 'createElement' code achieves the same effect as above.
    // BUT, usually we write the JSX code above.
    // return React.createElement('div', {className: 'App'}, 
    // React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
