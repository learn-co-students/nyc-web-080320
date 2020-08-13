class UserAnimal
    attr_accessor :owner, :animal
    @@all = []

    def initialize(owner, animal) 
        @owner = owner
        @animal = animal
        UserAnimal.all << self
    end

    def self.all
        @@all
    end

end