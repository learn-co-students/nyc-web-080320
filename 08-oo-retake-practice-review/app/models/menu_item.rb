class MenuItem
    attr_accessor :restaurant, :recipe, :price
    @@all = [] 

    def initialize(restaurant, recipe, price)
        @restaurant = restaurant
        @recipe = recipe
        @price = price.to_f
        MenuItem.all << self
    end

    def self.all
        @@all
    end
    #HALP!

    def owner
        # returns the Owner instance associated with the MenuItem instance
        self.restaurant.owner
    end

end