import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import api from './api'

class App extends React.Component {

  state = {
    api: api
  }

  addFavoritesClickHandler = (bey_id) => {
    let newArray = [...this.state.api]
    let foundObj = newArray.find(el => el.id === bey_id)
    foundObj.favorite = true
    console.log("adding", foundObj)
    // do not want to directly mutate state 
    this.setState({
      api: newArray
    })

    //async 
  }
  removeFavoritesClickHandler = (bey_id) => {
    let newArray = [...this.state.api]
    let foundObj = newArray.find(el => el.id === bey_id)
    foundObj.favorite = false
    console.log("adding", foundObj)
    this.setState({
      api: newArray
    })
    window.alert("hot sauce...swag")
  }

  filterBeys = () => {
    return this.state.api.filter(el => el.favorite)
  }


  render() {
    return (
      <div className="container">
        <BeyContainer beys={this.state.api} clickHandler={this.addFavoritesClickHandler} />
        <Favorites beys={this.filterBeys()} clickHandler={this.removeFavoritesClickHandler} />
      </div>
    );
  }
};

export default App;
