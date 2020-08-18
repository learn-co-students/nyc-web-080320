class Restaurant
    attr_accessor :owner, :name, :star_rating
    @@all = []

    def initialize(owner, name, star_rating) #first arg will be an instance of RestaurantOwner
        @owner = owner
        @name = name
        @star_rating = star_rating
        Restaurant.all << self
    end

    def self.all
        @@all
    end

    def menu_items
        # returns an array of all the MenuItem instances for the Restaurant.
        MenuItem.all.filter { |mi| mi.restaurant == self }
    end

    def recipes
        # returns an array of all the Recipe instances that are on this Restaurants menu.
        menu_items.map { |mi| mi.recipe }
    end

    def has_dish?(recipe)
        # returns true if the dish is on the menu at the given restaurant and false if it is not.
        self.recipes.include?(recipe)
    end

    def self.highest_rated
        # returns the highest rated Restaurant instance. OPTIONS: reduce, sort_by  & last 
        self.all.max_by {|rest| rest.star_rating }
    end

end