class Snail < ApplicationRecord
  # has_many :snail_snaps
  has_many :my_snaps, foreign_key: "snail_id", class_name: "SnailSnap"

  has_many :comments
  has_many :snail_snaps, through: :comments

  
end
