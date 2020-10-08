import React from 'react'
import DogCard from '../Components/DogCard'

function Favorites(props) {
    function renderDogs() {
        return props.dogs.map(el => <DogCard key={el.id} dog={el} clickHandler={props.clickHandler} favorite />)
    }
    console.log(props)
    return (
        <div className="list">{renderDogs()}</div>

    )
}


export default Favorites