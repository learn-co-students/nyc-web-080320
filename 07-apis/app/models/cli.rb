require 'pry'

class CLI

    def start
        puts "Welcome to the Pet Adoption CLI!"
        user = User.login 

        # user.adopt_animal
        # Animal.list_animals


        # we should refactor this! it works now! 
        puts "Which animal would you like to adopt?"
        Animal.all.each do |animal|
            puts animal[:name]
        end
        animal_name = gets.chomp
        UserAnimal.create(user: user, animal: Animal.find_by(name: animal_name))
        binding.pry 
    end

    
end