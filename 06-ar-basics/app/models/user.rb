require 'pry'

# mojo = Animal.new()
# furry = Animal.new()
# beatrice = Animal.new()

# User.new("Nai", 12, mojo, furry, beatrice)

class User
    attr_reader :views
    attr_writer :ssn
    attr_accessor :name, :age
    @@all = []

    # storage is an issue, can only initialize with one (the way i wrote it)
    def initialize(name, age, ssn=1234) 
        @name = name
        @age = age
        @ssn = ssn
        @views = 0
        @@all << self
    end

    def self.all
        @@all
    end

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
        # create a new UserAnimal instance 
        # self
        UserAnimal.new(self, animal_instance)
        # animal_instance.owner = self
    end
    

    def view_profile
        puts "Your name is #{self.name}"
        puts "Your age is #{self.age}"
        puts "Your views is #{self.views}"
        increment_views 
    end

    def say_name
        puts "Hi, my name is #{self.name}"
    end

    private
    
    def increment_views
        @views += 1
    end


  
end

# caryn = User.new("caryn").increment_views



  ## map / collect ==> will get you a new array the same length as the prior one
        ## with whatever evaluates in the code block

    ## select and filter 
        ## new array with same old elems that return true in code block
