class User < ActiveRecord::Base

    def user_animals
        UserAnimal.all.select do |ua|
            ua.owner == self
        end 
    end

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