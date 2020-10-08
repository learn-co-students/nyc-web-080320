import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import Favorites from "./Containers/Favorites";

class App extends Component {
  state = {
    favorites: [],
  }
  favoritesClickHandler = (dogObj) => {
    console.log("dog in clickhandler", dogObj)
    this.setState({ favorites: [...this.state.favorites, dogObj] })
  }
  removeFavoriteHandler = (dogObj) => {
    let newArray = this.state.favorites.filter(el => el.id !== dogObj.id)
    this.setState({ favorites: newArray })
  }
  render() {
    return (
      <div className="app">
        <DogsList clickHandler={this.favoritesClickHandler} />
        <Favorites dogs={this.state.favorites} clickHandler={this.removeFavoriteHandler} />
      </div>
    );
  }
}

export default App;
