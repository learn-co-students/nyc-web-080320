# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

jallen = RestaurantOwner.new('Jallen', 47)
canni = RestaurantOwner.new('Canni', 27)

rest1 = Restaurant.new(jallen, "Empanada Mana", 4)
rest2 = Restaurant.new(canni, "Blowfish", 5)
rest3 = Restaurant.new(canni, "Flor de Mayo", 5)


empanadas = Recipe.new("Empanadas", "jallen could eat erryday")
fish_fry = Recipe.new("fish fry!!", "fry that fish up. preferably catfish")
crab_cake_sandwich = Recipe.new("Crab Cake Sandwich", "the most delicious crab you will eat in harlem")

mi1 = MenuItem.new(rest1, empanadas, 5.0)
mi3 = MenuItem.new(rest3, empanadas, 12.0)
mi2 = MenuItem.new(rest2, fish_fry, 25.0)
mi4 = MenuItem.new(rest3, fish_fry, 2.0)



# empanadas cheapest is jallens
# fish frys cheapesat is flor de mayo 
# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
