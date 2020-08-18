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

end