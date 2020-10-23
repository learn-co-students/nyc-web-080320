import React, { Component } from "react";
import { connect } from 'react-redux'
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
    console.log("DogsList Props: ", this.props)
    return (
      <>
        <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
        <div className="list">{this.renderDogs()}</div>
      </>
    );
  }
}
// mapDispatchToProps => to give a component a callback to change state 

// mapStateToProps => to give a component access to some piece of state => subscribe
function msp(state) {
  return { dogs: state.api }
}

// Higher Order Components 

// function connect(msp, mdp){
//     let mspProps = msp()

//     function renderNewDogsList(DogsList){
//       Doglist => newProps => {...props, mspProps }
//       return <DogsList/>
//      }

// }


// export default withRouter(DogsList)
export default connect(msp)(DogList);
