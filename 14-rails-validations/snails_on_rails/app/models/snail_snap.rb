class SnailSnap < ApplicationRecord
  belongs_to :snail

  has_many :comments
  has_many :snails, through: :comments  
end
