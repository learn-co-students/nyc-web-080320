import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  renderBeys = () => {
    return this.props.beys.map(el => <BeyCard key={el.id} bey={el} clickHandler={this.props.clickHandler} />)
  }
  render() {
    console.log(this.props)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
