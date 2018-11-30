import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: '001', name: 'Alex', age: 37, other: null },
      { id: '002', name: 'Sandra', age: 36, other: null },
      { id: '003', name: 'Martina', age: 4, other: null },
      { id: '004', name: 'Mario', age: 0, other: 'Repta muy bien' }
    ],
    showPeople: true
  };

  switchNameHandler = name => {
    this.setState({
      people: this.state.people.map(it => (it.name === name ? Object.assign({}, it, { name: 'Alejandro' }) : it))
    });
  };

  deletePersonHandler = id => {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  };

  nameChangedHandler = ({ newName }, id) => {
    this.setState({
      people: this.state.people.map(person => {
        if (person.id !== id) {
          return person;
        }

        return Object.assign({}, person, { name: newName });
      })
    });
  };

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  peopleList() {
    return (
      <>
        {this.state.people.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(person.id)}
            changed={event => this.nameChangedHandler(event, person.id)}
          >
            {person.other}
          </Person>
        ))}
      </>
    );
  }

  render() {
    const style = {
      backGroundColor: '#DEDEDE',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;
    if (this.state.showPeople) {
      people = this.peopleList();
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>
          Switch name
        </button>
        <button style={style} onClick={this.togglePeopleHandler}>
          Hide all
        </button>
        {people}
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, `Hi, I'm a react app`));
  }
}

export default App;
