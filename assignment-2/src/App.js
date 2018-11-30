import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: '',
    inputLength: 0
  };

  inputChangedHandler = event => {
    this.setState({
      text: `${event.target.value}`,
      inputLength: `${event.target.value}`.length
    });
  };

  deleteLetterOn = index => {
    const text = this.state.text
      .split('')
      .filter((_, idx) => idx !== index)
      .join('');

    this.setState({
      text,
      inputLength: text.length
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.inputChangedHandler} value={this.state.text} />
          <Validation inputLength={this.state.inputLength} />
        </div>
        {this.state.text.split('').map((letter, index) => (
          <Char key={index} letter={letter} clicked={() => this.deleteLetterOn(index)} />
        ))}
      </div>
    );
  }
}

export default App;
