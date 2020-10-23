import React from "react";

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
          <h2 >{this.props.dog.name}</h2>
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
