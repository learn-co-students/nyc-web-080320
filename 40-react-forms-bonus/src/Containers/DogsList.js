import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from "../Components/SearchForm";

class DogList extends Component {

  state = {
    api: apiResponse,
    searchTerm: "",
  }

  renderDogs = () => {
    return this.state.api.filter(el => el.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(el => <DogCard key={el.id} dog={el} clickHandler={this.props.clickHandler} />)
  }

  submitHandler = (dogObj) => {
    console.log("submitting", dogObj)
    // take the object and add it to our api
    let newArray = [dogObj, ...this.state.api]
    // rerender the DogsList so it prints our updated array
    this.setState({ api: newArray })
  }
  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    // console.log("api", apiResponse)
    return (
      <>
        <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
        <CreateForm submitHandler={this.submitHandler} />
        <div className="list">{this.renderDogs()}</div>
      </>
    );
  }
}

export default DogList;
