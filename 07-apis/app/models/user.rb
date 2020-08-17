class User < ActiveRecord::Base
    has_many :user_animals
    has_many :animals, through: :user_animals

    def adopt_animal(animal_instance)
        UserAnimal.new(self, animal_instance)
    end

    def self.login
        puts "Please log in. What is your name?"
        name = gets.chomp
        puts "What is your password?"
        password = gets.chomp
        User.find_by(name: name, password: password)
    end

    def view_profile
        puts "Your name is #{self.name}"
        puts "Your age is #{self.age}"
    end

    def say_name
        puts "Hi, my name is #{self.name}"
    end

end