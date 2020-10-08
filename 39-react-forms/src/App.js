import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <DogsList />
      </div>
    );
  }
}

export default App;
