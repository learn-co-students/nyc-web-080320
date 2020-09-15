console.log("DOM Manipulation is so cool.")




/*
√1. create a new li element for the goonies movie
√2. insert all that HTML inside the li BUT with Goonies info
3. slap that li up on the DOM somehow
*/

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


renderMovie(gooniesObj)



// could we say movieLi.id = movieObj.title or something?