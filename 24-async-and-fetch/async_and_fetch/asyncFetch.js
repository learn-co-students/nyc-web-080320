console.log("async and fetch")

// Asynchrony

function iAmSync(){
  for(let i = 0; i < 10000000; i++){
    let d = new Date()
  }

  console.log('done')
}

function iAmAsync(){
  setTimeout(function(){
    console.log("inside the timeout")
  }, 4000)

  console.log('outside the timeout')
}

// Fetch

let pikachu = 'pikachu'

console.log("Before fetch: ", pikachu)

fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then(response => response.json())
.then(data => {
  console.log("Inside the .then: ", data)
  renderPokemon(data)
})


function renderPokemon(data){
  // sort them
  // create lis
  // render those to the DOM
  // email people
}

console.log("After fetch: ", pikachu)