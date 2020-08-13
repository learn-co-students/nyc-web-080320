class Animal < ActiveRecord::Base
    has_many :user_animals
    has_many :users, through: :user_animals #creates Animal#users

    # could leave this method cause it creates a new one ie Animal#owners
    def owners 
        user_animals.map do |ua|
            ua.user
        end
    end

end