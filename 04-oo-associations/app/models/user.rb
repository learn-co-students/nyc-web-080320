require 'pry'

class User
    attr_reader :views
    attr_writer :ssn
    attr_accessor :name, :age
    @@all = []

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

    def view_profile
        puts "Your name is #{self.name}"
        puts "Your age is #{self.age}"
        puts "Your views is #{self.views}"
        increment_views 
    end

    def say_name
        puts "Hi, my name is #{self.name}"
    end

    def adopt_animal(animal_instance)
        animal_instance.owner = self
    end
    
    def pets
        Animal.all.select do |animal|
            animal.owner == self 
        end
    end

    ## find all dogs 

    ## put up for adoption 

    ## training 


    private
    
    def increment_views
        @views += 1
    end

end