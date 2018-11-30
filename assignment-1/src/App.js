import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: null
  };

  userNameChangedHandler = (userName) => {
    this.setState({ userName });
  }

  render() {
    return (
      <div className="App">
        <UserInput name={ this.state.userName } onNameChanged={this.userNameChangedHandler}></UserInput>
        <hr/>
        <UserOutput name={ this.state.userName }></UserOutput>
        <UserOutput name="Sandra"></UserOutput>
        <UserOutput name={ this.state.userName }></UserOutput>
        <UserOutput name="Mario"></UserOutput>
      </div>
    );
  }
}

export default App;
