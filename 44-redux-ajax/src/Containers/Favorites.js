import React from 'react'
import DogCard from '../Components/DogCard'

function Favorites(props) {
    console.log("favorites props: ", props)

    function renderDogs() {
        return props.dogs.map(el => <DogCard key={el.id} dog={el} />)
    }
    return (<div className="list">{renderDogs()}</div>
    )
}

export default Favorites