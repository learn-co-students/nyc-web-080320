class Animal
    attr_accessor :name 
    attr_reader :species
    @@all = []

    def initialize(name, species)
        @name = name
        @species = species
        @age = 20
        @@all << self
    end

    def self.find_by_name(query)
        # @@all.find do |animal|     <==== least preferable
        # self.all.find do |animal|
        Animal.all.find do |animal|
            animal.name == query
        end
    ends

    def self.find_by_species(species)
        self.all.filter do |animal|
            animal.species == species
        end
    end

    def self.all
        @@all
    end
end

# - `Animal.find_by_species` should take a strihng and return a list of all animals of that species

# - `Animal.find_by_name` should take in a string and return the animal with that name
# 1. Should this be an instance or class method?
# 2. What enumerator tool will we need to make this work? 


# Animal.new("Cooper", "cat")

# - A `Animal` class with a name (read and write-able) and a species (readable)
# - `Animal.all` should return a list of all animal instances

