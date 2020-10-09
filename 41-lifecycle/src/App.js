import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import CreateForm from './Components/CreateForm'
import Favorites from './Containers/Favorites'
class App extends Component {

  state = {
    api: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/apiResponse")
      .then(res => res.json())
      .then(resp => this.setState({ api: resp }))
      .catch(console.log)
  }
  submitHandler = (dogObj) => {
    console.log("submitting", dogObj)
    // take the object and add it to our api. Now we need an AJAX request

    fetch("http://localhost:5000/apiResponse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(dogObj)
    })
      .then(resp => resp.json())
      .then(newDog => {
        let newArray = [...this.state.api, newDog]
        this.setState({ api: newArray }, () => console.log("new state: ", this.state.api))
      })
      .catch(console.log)
    // let newArray = [dogObj, ...this.state.api]
    // rerender the DogsList so it prints our updated array
    // this.setState({ api: newArray })
  }

  renderFavorites = () => {
    return this.state.api.filter(el => el.favorite)
  }

  addToFavoritesClickHandler = (id) => {
    // need to know which dog to edit
    // send an AJAX request to edit 
    fetch(`http://localhost:5000/apiResponse/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ favorite: true })
    })
      .then(resp => resp.json())
      .then(updatedDog => {
        let newArray = [...this.state.api]
        let oldDog = newArray.find(el => el.id === updatedDog.id)
        let idx = newArray.indexOf(oldDog)
        console.log(idx)
        newArray[`${idx}`] = updatedDog
        this.setState({ api: newArray })
      })
      .catch(console.log)
    // update current array to reflect the change
  }

  render() {
    // console.log("App state:", this.state)
    return (
      <div className="app">
        <CreateForm submitHandler={this.submitHandler} />
        <DogsList dogs={this.state.api} clickHandler={this.addToFavoritesClickHandler} />
        <Favorites dogs={this.renderFavorites()} />
      </div>
    );
  }
}

export default App;
