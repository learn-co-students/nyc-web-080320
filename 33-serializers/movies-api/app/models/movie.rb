class Movie < ApplicationRecord
  has_many :movie_actors, dependent: :destroy
  has_many :actors, through: :movie_actors
  
  validates_presence_of :title, :year, :genre, :imageUrl, :score
end
