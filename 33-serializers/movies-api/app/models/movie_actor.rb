class MovieActor < ApplicationRecord
  belongs_to :actor
  belongs_to :movie

  validates_presence_of :role
end
