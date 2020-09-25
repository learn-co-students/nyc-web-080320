class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.title }

    # inverse of except is only
    render json: movies, except: [:updated_at, :created_at] 
  end

  def create
    movie = Movie.new(movie_params)

    if movie.save
      render json: movie
    else
      render json: {error: movie.errors.full_messages}, status: :not_acceptable
    end

  end

  def show
    movie = Movie.find(params[:id])

    render json: movie
  end

  def update
    movie = Movie.find(params[:id])

    movie.update!(movie_params)

    render json: movie
  end

  def destroy
    movie = Movie.find(params[:id])

    movie.destroy

    render json: {}
  end

  private

  def movie_params
    params.require(:movie).permit(:imageUrl, :score, :title, :year, :genre)
  end
end
