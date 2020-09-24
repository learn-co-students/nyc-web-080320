

document.addEventListener("DOMContentLoaded", function(e){
  const baseUrl = "http://localhost:3000/api/v1/movies/"
  const movieList = document.querySelector('#movie-list')


  
  function renderMovie(movieObj){
    const movieLi = document.createElement('li')
    movieLi.dataset.movieId = movieObj.id
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
      <button data-purpose="delete" >&times;</button>
    `
    
    movieList.prepend(movieLi)
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target

      const movieObj = buildMovieFromForm(form)

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(movieObj)
      }

      fetch(baseUrl, options)
      // .then(response => response.json())
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw Error(response.statusText)
        }
      })
      .then(movie => {
        renderMovie(movie)
        document.querySelector('#new-movie-form').reset()
      })
      .catch(error => {
        console.log(error)
      })

    })
  }
  
  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.matches(".up-vote")){
        incrementScore(e.target)
      } else if(e.target.matches('[data-purpose="delete"]')){

        removeMovie(e.target)

      } else if(e.target.matches("#show-form")){
        renderForm(e.target)
      } else if(e.target.matches('#hide-form')){
        removeNewMovieForm(e.target)
      }
    })
  }

  const removeNewMovieForm = el => {
    document.querySelector('#new-movie-form').remove()
    el.textContent = "Show Form"
    el.id = "show-form"
  }

  const buildMovieFromForm = form => {
    const title = form.title.value
    const year = form.year.value
    const genre = form.genre.value
    const imageUrl = form.imageUrl.value
    const score = 0

    const movieObj = {
      title: title,
      year: year,
      genre: genre,
      imageUrl: imageUrl,
      score: score
    }

    return movieObj
  }
  
  const renderForm = el => {
    const form = buildForm()
    el.insertAdjacentElement('afterend', form)
    el.textContent = 'Hide Form'
    el.id = 'hide-form'
  }

  const buildForm = () => {
    const newMovieForm = document.createElement('form')
    newMovieForm.id = 'new-movie-form'

    newMovieForm.innerHTML = `
      <label>Title: </label>
      <input type="text" name="title">
      <br>
      <label>Year: </label>
      <input type="number" name="year">
      <br>
      <label>Genre: </label>
      <input type="text" name="genre">
      <br>
      <label>Image URL: </label>
      <input type="text" name="imageUrl">
      <br>
      <input type="submit" value="Add Movie">
    `

    return newMovieForm
  }
  
  const removeMovie = el => {
    const id = parseInt(el.parentElement.dataset.movieId)

    const movie = Movie.find(id)
    
    const options = {
      method: "DELETE"
    }
    
    fetch(baseUrl + id, options)
    .then(response => response.json())
    .then(data => {
      movie.remove()
      // el.parentElement.remove()
    })
  }
  
  const incrementScore = el => {
    const parentLi = el.parentElement
    const id = parentLi.dataset.movieId
    const span = parentLi.querySelector('span')
    const currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1

    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({ score: newScore })
    }
    
    fetch(baseUrl + id, options)
    .then(response => response.json())
    .then(movie => {
      const movieLi = document.querySelector(`[data-movie-id="${movie.id}"]`)
      const movieSpan = movieLi.querySelector('span')
      movieSpan.textContent = movie.score
    })
    
  }
  
  const getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movieCollection => {
      let movies = movieCollection.map(movie => {
        return new Movie(movie)
      })

      Movie.renderMovies(movies, movieList)
      // renderMovies(movieCollection)
    })
    .catch(error => {
      console.log(error)
    })
  }

  clickHandler() 
  submitHandler()
  getMovies()
})














