import React from "react";

const BeyCard = (props) => {
  console.log("BeyCard Props: ", props)
  // function localClickHandler() {
  //   props.clickHandler(props.bey.id)
  // }
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img alt="" src={props.bey.img} onClick={() => props.clickHandler(props.bey.id)} />
    </div>
  );
};



export default BeyCard;

// Thunk
//  - a function that's wrapped inside of another function to delay execution/invokation 