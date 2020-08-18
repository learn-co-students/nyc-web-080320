class Recipe
    attr_reader :name
    attr_accessor :description
    @@all = []

    def initialize(name, description)
        @name = name
        @description = description
        # all below equivalent 
        # Recipe.all << self
        # @@all << self 
        self.class.all << self 
    end

    def self.all
        @@all
    end

    def menu_items
        # returns an array of all the MenuItem instances for the Recipe.
        MenuItem.all.filter do |menu_item|
            menu_item.recipe == self 
        end
    end

    def restaurants
        # returns an array of all the Restaurant instances that have the Recipe on their menu.
        menu_items.map { |mi| mi.restaurant }
    end

    def average_price
        # returns the average price (integer) for all MenuItem instances of this Recipe instance.
        # Options: reduce is cool (alicia)
        all_prices = self.menu_items.map { |mi| mi.price }
        all_prices.sum / all_prices.count
    end

    def highest_price
        # returns the highest price (integer) for all MenuItem instances of this Recipe instance.
        self.menu_items.max_by { |mi| mi.price }.price.to_i
        # self.menu_items.map { |mi| mi.price }.max.to_i
    end

    def cheapest_restaurant
        # returns the Restaurant instance where this Recipe instance is the cheapest.
        self.menu_items.min_by { |mi| mi.price }.restaurant
    end

    def self.inactive
        # returns an array of Recipe instances that are not currently being sold at any restaurants.
        # MenuItem.all ==> not a single one associated with this recipe 
        self.all.filter { |recipe| recipe.menu_items == [] } # [] and nil are different data types 
    end

end