
document.addEventListener("DOMContentLoaded", e => {
  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

  const getTrainers = () => {
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainerCollection => {
      renderTrainers(trainerCollection)
    })
  }
  
  const renderTrainers = trainerCollection => {
    const main = document.querySelector('main')

    trainerCollection.forEach(trainerObj => {
      const trainerDiv = createTrainerDiv(trainerObj)
      const ul = document.createElement('ul')
      trainerDiv.append(ul)

      trainerObj.pokemons.forEach(pokemonObj => {
        renderPokemon(pokemonObj, ul)
      })

      main.append(trainerDiv)
    })
  }

  const renderPokemon = (pokemonObj, ul) => {
    const pokemonLi = createPokemonLi(pokemonObj)
    ul.append(pokemonLi)
  }

  const createPokemonLi = pokemonObj => {
    const li = document.createElement('li')
    li.innerHTML = `
      ${pokemonObj.nickname} (${pokemonObj.species}) <button class="release" data-pokemon-id="${pokemonObj.id}">Release</button>
    `
    return li
  }

  function createTrainerDiv(trainerObj) {
    const div = document.createElement('div')
    div.classList.add('card')
    div.dataset.id = trainerObj.id
    
    div.innerHTML = `
      <p>${trainerObj.name}</p>
      <button data-trainer-id="${trainerObj.id}">Add Pokemon</button>
    `

    return div
  }
  
  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.textContent === 'Add Pokemon'){
        const button = e.target
        const trainerId = button.dataset.trainerId
        const ul = button.parentElement.querySelector("ul")

        const options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ trainer_id: trainerId })
        }

        fetch(POKEMONS_URL, options)
        .then(response => response.json())
        .then(data => {
          if(data.error){
            alert(data.error)
          } else {
            renderPokemon(data, ul)
          }
        })
      } else if(e.target.textContent === 'Release'){
        const pokemonId = e.target.dataset.pokemonId

        const options = {
          method: "DELETE"
        }

        fetch(`${POKEMONS_URL}/${pokemonId}`, options)
        .then(response => response.json())
        .then(pokemonObj => {
          const button = document.querySelector(`[data-pokemon-id="${pokemonObj.id}"]`)
          button.parentElement.remove()
        })
      }
    })
  }
  
  clickHandler()
  getTrainers()
})


/*
- When a user loads the page, they should see all
  trainers, with their current team of Pokemon.

  √1. DOMContentLoaded listener
  √2. GET to /trainers
  √3. render trainers
  √4. render the pokemons

- Whenever a user hits `Add Pokemon` and they have
  space on their team, they should get a new Pokemon. (or we should see an error message)

  √1. click listener on add pokemon (event delegation)
  √2. POST to /pokemons with the trainer ID
  √3. render the new Pokemon to the DOM / handle the error message


- Whenever a user hits `Release Pokemon` on a specific
  Pokemon team, that specific Pokemon should be released from
  the team.

  √1. click listener on release buttons
  √2. make a delete request to /pokemons/:id
  √3. remove the pokemon's li from the DOM
*/
