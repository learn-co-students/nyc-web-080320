class Animal < ActiveRecord::Base
    has_many :user_animals
    has_many :users, through: :user_animals 

end