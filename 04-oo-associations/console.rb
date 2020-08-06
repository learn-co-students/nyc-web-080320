require 'pry'
require_relative './app/models/user'
require_relative './app/models/animal'

hermione = User.new('hermione', 18)
teddy = User.new('teddy', 18)
erik = User.new('erik', 18)
alicia = User.new('alicia', 18)
greg = User.new('greg', 18)
russell = User.new('russell', 47)
kain = User.new('kain', 47)

animals = [
    {name: "savannah", species: "cat", owner: russell},
    {name: "mojo", species: "cat", owner: hermione},
    {name: "appa", species: "dog", owner: kain},
    {name: "sidney", species: "dog"},
    {name: "rosie", species: "dog", owner: teddy},
    {name: "bandit", species: "dog"},
    {name: "mocha", species: "dog"},
    {name: "blade", species: "dog"},
    {name: "luna", species: "cat"},
    {name: "willow", species: "cat"},
    {name: "Miss Maybe Knot", species: "cat"},
    {name: "alister", species: "cat"},
    {name: "een", species: "cat"},
    {name: "oon", species: "cat"},
    {name: "felix", species: "cat"},
    {name: "pearl", species: "cat"}
]


animals.each do |animal|
    Animal.new(animal[:name], animal[:species], animal[:owner])
end

savannah, mojo, appa, sidney, rosie = Animal.all

# this fails! 
# teddy.put_up_for_adoption(hermione)




binding.pry 