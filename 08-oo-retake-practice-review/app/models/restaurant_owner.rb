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

    def self.average_age
        # returns the average age of all the RestaurantOwners
        # self.all.reduce(0) { |sum, restO| sum + (restO.age / self.all.count) }
        all_ages = self.all.map { |restO| restO.age }
        all_ages.sum / all_ages.count
    end

    def sell_restaurant(restaurant, buyer)
        # transfers ownership of a Restaurant instance 
        # (which must belong to the current user) to the buyer which is a RestaurantOwner instance.
        if self.restaurants.include?(restaurant)
            restaurant.owner = buyer 
        else
            puts "You cannot transfer a restaurant that doesn't belong to you, #{self.name}"
        end
    end

end