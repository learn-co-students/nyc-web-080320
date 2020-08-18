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

    def owner
        # returns the Owner instance associated with the MenuItem instance
        self.restaurant.owner
    end

    def self.most_expensive_item
        # returns the most expensive MenuItem instance
        self.all.max_by { |mi| mi.price }
    end

end