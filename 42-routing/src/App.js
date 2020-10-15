import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom'
import DogContainer from "./Containers/DogContainer";
import FoOhFo from "./Components/FoOhFo";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/dogs" component={DogContainer} />
        <Route component={FoOhFo} />
      </Switch>
    </>
  );
}

export default App;

  //       <div className="app">
  //   <CreateForm submitHandler={this.submitHandler} />
  //   <DogsList dogs={this.state.api} clickHandler={this.addToFavoritesClickHandler} />
  //   <Favorites dogs={this.renderFavorites()} />
  // </div>