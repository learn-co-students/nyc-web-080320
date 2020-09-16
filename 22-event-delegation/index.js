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

  const upVoteButtons = document.querySelectorAll('.up-vote') 

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



























// const movieCollection = [
//   {
//     title: 'The Goonies',
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
//     year: 1985,
//     genre: 'Adventure',
//     score: 100
//   },
//   { 
//     title: 'Free Willy',
//     imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
//     year: 1993,
//     genre: 'Family',
//     score: 0  
//   },
//   { 
//     title: 'Top Gun',
//     imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
//     year: 1986,
//     genre: 'Adventure',
//     score: 0  
//   },
//   { 
//     title: 'Mean Girls',
//     imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
//     year: 2004,
//     genre: 'Comedy',
//     score: 0  
//   },
//   { 
//     title: 'Parasite',
//     imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
//     year: 2019,
//     genre: 'Horror',
//     score: 0  
//   },
//   {
//     title: "What About Bob?",
//     year: 1991,
//     genre: 'Comedy',
//     score: 0,
//     imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
//   },
//   {
//     title: "The Matrix",
//     year: 1999,
//     genre: 'Science Fiction',
//     score: 0,
//     imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
//   },
//   {
//     title: "Jaws",
//     year: 1984,
//     genre: 'Horror',
//     score: 0,
//     imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
//   },
// ]