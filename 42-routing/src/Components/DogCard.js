import React from "react";
import { NavLink, Link } from 'react-router-dom'

class DogCard extends React.Component {

  // constructor(){
  //   super()
  //   state={}
  //   this.clickHandler = this.clickHandler.bind(this)
  // }
  state = {
    clicked: true
  }


  clickHandler = () => {
    console.log("barking")
    // RE-RENDER
    // this.setState({ clicked: !this.state.clicked })

    // Functional setState
    this.setState((prevState) => ({ clicked: !prevState.clicked }))

  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <Link to={`/dogs/${this.props.dog.id}`}>
            <h2 >{this.props.dog.name}</h2>
          </Link>
          <img alt="" src={this.props.dog.img} onClick={() => this.props.clickHandler(this.props.dog.id)} />
        </span>
        <span className="bark" onClick={this.clickHandler}>
          <button>Bark</button>
        </span>
        {this.state.clicked ? <h2>Bark</h2> : null}
      </div>
    );
  }
}

export default DogCard;
