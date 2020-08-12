class UserAnimal
    attr_accessor :owner, :animal
    @@all = []

    def initialize(owner, animal) ## User instance, Animal instance
        @owner = owner
        @animal = animal
        UserAnimal.all << self
    end

    def self.all
        @@all
    end

end