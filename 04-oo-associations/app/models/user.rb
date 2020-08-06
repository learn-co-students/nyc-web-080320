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
    def find_my_dogs
        self.pets.filter do |a|
            a.species == "dog"
        end
    end
    
    ## put up for adoption 
    def put_up_for_adoption(animal_instance)
        # make sure the animal belongs to the current user 
        if animal_instance.owner == self
            # we need to set its user back to nil
            animal_instance.owner = nil
            puts "We hope they their forever home soon :( "
        else
            puts "You can't put up someone else's animal for adoption! RUDE!"
        end

    end

    ## training 
    def training(animal_instance)
        # it is your animal... for now at least
        if animal_instance.owner == self
            if animal_instance.species == "dog"  # if its a dog, increase its obedience 
                animal_instance.obedience += 3
                puts "Woof woof!"
            elsif  animal_instance.species == "cat"
                # if its a cat, do not increase and puts something about it attacking you 
                puts "Don't you even think about it. MEOOOOW!!"
                puts "The cats claws come out and you RUN!"
            else
                puts "Is that a trainable animal...? Iguanas?"
            end
        end

        ## STRATEGY: set a conditional so obedience won't go above ten
    end


    private
    
    def increment_views
        @views += 1
    end

end

