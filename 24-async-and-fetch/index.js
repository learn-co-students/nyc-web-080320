console.log("Delegation is just getting someone else to do something you don't want to do.")


document.addEventListener("DOMContentLoaded", function(e){
  const movieList = document.querySelector('#movie-list')

  const renderMovies = movies => {
    movies.forEach(movieObj => {
      renderMovie(movieObj)
    })
  }
  
  function renderMovie(movieObj){
    const movieLi = document.createElement('li')
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
      <button data-purpose="delete">&times;</button>
    `
    
    movieList.append(movieLi)
  }

  const clickHandler = () => {
    movieList.addEventListener('click', e => {
      if(e.target.matches(".up-vote")){
        const button = e.target
        const parentLi = button.parentElement
        const span = parentLi.querySelector('span')
        const currentScore = parseInt(span.textContent)
        const newScore = currentScore + 1
    
        span.textContent = newScore
      } else if(e.target.matches('[data-purpose="delete"]')){
        e.target.parentElement.remove()
      }
    })
  }

  const getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
    .catch(error => {
      alert(error)
    })
  }

  clickHandler() 
  // renderMovies(movieCollection)
  getMovies()
})






















