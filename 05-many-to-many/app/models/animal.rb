class Animal
    attr_accessor :name
    attr_reader :species
    @@all = []

    def initialize(name, species)
        @name = name
        @species = species
        @@all << self
    end

    def self.all
        @@all
    end

    def owners 
        user_animals.map do |ua|
            ua.owner
        end
    end

    private

    def user_animals
        UserAnimal.all.select do |ua|
            ua.animal == self
        end
    end

end