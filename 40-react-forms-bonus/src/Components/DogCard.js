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
    this.props.clickHandler(this.props.dog)
  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="" src={this.props.dog.img} />
        </span>
        <span className="bark" onClick={this.clickHandler}>
          {this.props.favorite ? <button>Remove</button> : <button>Add To Favorites</button>}
        </span>
        {this.state.clicked ? <h2>Bark</h2> : null}
      </div>
    );
  }
}

export default DogCard;
