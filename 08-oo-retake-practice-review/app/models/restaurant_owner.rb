class RestaurantOwner
    attr_accessor :name, :age
    @@all = []

    def initialize(name, age)
        @name = name
        @age = age
        RestaurantOwner.all << self
    end

    def self.all
        @@all
    end

    def restaurants
        # returns an array of Restaurant instances associated with the RestaurantOwner instance.
        Restaurant.all.select { |rest| rest.owner == self }
    end

    def menu_items
        # returns an array of MenuItem instances associated with 
        # any of the RestaurantOwners Restaurant instances.
        restaurants.map { |rest| rest.menu_items }.flatten
        # restaurants.map { |rest| rest.menu_items } ==becomes==> [of restaurant instances]
    end

end