import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import SearchForm from "../Components/SearchForm";

class DogList extends Component {

  state = {
    searchTerm: "",
  }

  renderDogs = () => {
    return this.props.dogs.filter(el => el.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(el => <DogCard key={el.id} dog={el} clickHandler={this.props.clickHandler} />)
  }

  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    // console.log("api", apiResponse)
    return (
      <>
        <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
        <div className="list">{this.renderDogs()}</div>
      </>
    );
  }
}

export default DogList;
