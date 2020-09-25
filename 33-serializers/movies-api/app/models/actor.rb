class Actor < ApplicationRecord
  has_many :movie_actors, dependent: :destroy
  has_many :movies, through: :movie_actors
end
