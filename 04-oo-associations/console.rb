require 'pry'
require_relative './app/models/user'
require_relative './app/models/animal'


animals = [
    {name: "mojo", species: "cat"},
    {name: "appa", species: "dog"},
    {name: "sidney", species: "dog"},
    {name: "rosie", species: "dog"},
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

hermione = User.new('hermione', 18)
teddy = User.new('teddy', 18)
erik = User.new('erik', 18)
alicia = User.new('alicia', 18)
greg = User.new('greg', 18)
russell = User.new('russel', 47)
russell2 = User.new('russel', 47)


animals.each do |animal|
    Animal.new(animal[:name], animal[:species])
end


savannah = Animal.new("savannah", "cat", russell)

mojo, appa, sidney, rosie = Animal.all




binding.pry 