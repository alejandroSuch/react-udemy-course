import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Alex', age: 37, other: null },
      { name: 'Sandra', age: 36, other: null },
      { name: 'Martina', age: 4, other: null },
      { name: 'Mario', age: 0, other: 'Repta muy bien' }
    ]
  };

  switchNameHandler = name => {
    this.setState({
      people: this.state.people.map(it => (it.name === name ? Object.assign({}, it, { name: 'Alejandro' }) : it))
    });
  };

  nameChangedHandler = ({ oldName, newName }) => {
    this.setState({
      people: this.state.people.map(it => (it.name === oldName ? Object.assign({}, it, { name: newName }) : it))
    });
  };

  render() {
    const style = {
      backGroundColor: '#DEDEDE',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>
          Switch name
        </button>
        {this.state.people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          >
            {person.other}
          </Person>
        ))}
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, `Hi, I'm a react app`));
  }
}

export default App;
