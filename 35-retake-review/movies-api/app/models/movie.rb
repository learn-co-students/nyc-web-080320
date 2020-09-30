class Movie < ApplicationRecord
  validates_presence_of :title, :year, :genre, :imageUrl, :score
end
