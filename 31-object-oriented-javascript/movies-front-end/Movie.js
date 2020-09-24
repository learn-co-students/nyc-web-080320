class Movie{
  constructor({ title, year, genre, score, imageUrl, id }){
    this.title = title
    this.year = year
    this.genre = genre
    this.score = score
    this.imageUrl = imageUrl
    this.id = id
    this.node = this.createMovieNode()

    Movie.all.push(this)
  }

  createMovieNode(){
    const movieLi = document.createElement('li')
    movieLi.dataset.movieId = this.id
    movieLi.classList.add("movie")
    movieLi.id = this.title
    
    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" >&times;</button>
    `

    return movieLi
  }
  
  render(movieList){
    movieList.prepend(this.node)
  }

  remove(){
    this.node.remove()
  }

  static all = []

  static find(id){
    return this.all.filter(movie => movie.id === id)[0]
  }
  
  static renderMovies(movies, movieList){
    for(let movie of movies){
      movie.render(movieList)
    }
  }
}