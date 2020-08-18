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

end