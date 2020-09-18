
document.addEventListener("DOMContentLoaded", function(e){
  const baseUrl = "http://localhost:3000/movies/"
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
      .then(response => response.json())
      .then(movie => {
        renderMovie(movie)
        document.querySelector('#new-movie-form').reset()
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
    el.parentElement.remove()
  }
  
  const incrementScore = el => {
    const parentLi = el.parentElement
    const span = parentLi.querySelector('span')
    const currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1

    span.textContent = newScore
  }
  
  const getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
    .catch(error => {
      alert(error)
    })
  }

  clickHandler() 
  submitHandler()
  getMovies()
})



/*


https://lumiere-a.akamaihd.net/v1/images/rich_insideout_header_mobile_ce11b9a6.jpeg?region=0,0,640,952


As a user, when I click the "Show Form" button I should see a form for entering a new movie and the text in the button should change to "Hide Form" and it should appear after a page reload.

1. Find the show form button and add a click listener to it.
2. build the form and attach it to the DOM
3. change the button text
4. post request to create a new movie

As a user, when I submit a new movie including data I should see that movie appear at the top of the list of movies and the form should be emptied.

1. add a submit listener to the form/document
2. on submit, extract data from the form
3. slap a new movie the dom using that data
4. clear out the form

As a user, when I click the "Hide Form" button I should see the form disappear and the text in the button should change back to "Show Form".

*/














