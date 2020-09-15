console.log("Events are cool I guess.")


document.addEventListener("DOMContentLoaded", function(e){
  console.log("DOM Content Loaded")

  // just a datasource - kind of a stand in for a remote db
  const gooniesObj = {
    title: "The Goonies",
    imageUrl: "https://i.etsystatic.com/7965399/r/il/e7eaf6/1514626619/il_570xN.1514626619_mvx9.jpg",
    year: 1984,
    genre: "Adventure",
    score: 10,
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement('li')
    // movieLi.className = "movie"
    movieLi.classList.add("movie")
    movieLi.id = movieObj.title
    
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt="" src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
    
    const movieList = document.querySelector('#movie-list')
    movieList.append(movieLi)
  }

  // const jawsUpVoteButton = document.querySelector('button')
  const upVoteButtons = document.querySelectorAll('.up-vote') // => Node List does implement .forEach

  for(let button of upVoteButtons){
    button.addEventListener('click', function(e){
      const button = e.target
      const parentLi = button.parentElement
      const span = parentLi.querySelector('span')
      const currentScore = parseInt(span.textContent)
      const newScore = currentScore + 1
  
      span.textContent = newScore
    })
  }
  

  renderMovie(gooniesObj)
})




/* As a user, when I click the Up Vote button for the Jaws movie, the movie score should increment by one

1. get the jaws up vote button
2. add a click listener to it
3. do a bit of DOM manipulation to increment the score 

*/