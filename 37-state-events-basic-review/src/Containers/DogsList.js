import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'


class DogList extends Component {

  state = {
    api: apiResponse
  }

  renderDogs = () => {
    return this.state.api.map(el => <DogCard key={el.id} dog={el} />)
  }

  render() {
    // console.log("api", apiResponse)
    return <div className="list">{this.renderDogs()}</div>;
  }
}

export default DogList;
