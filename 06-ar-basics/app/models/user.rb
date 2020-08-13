class User < ActiveRecord::Base
    has_many :user_animals
    has_many :animals, through: :user_animals

    def pets
        user_animals.map do |ua|
            ua.animal
        end
    end

    def adopt_animal(animal_instance)
        UserAnimal.new(self, animal_instance)
    end

    def view_profile
        puts "Your name is #{self.name}"
        puts "Your age is #{self.age}"
    end

    def say_name
        puts "Hi, my name is #{self.name}"
    end

end