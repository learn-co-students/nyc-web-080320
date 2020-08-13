require 'pry'
require_relative '../app/models/user'
require_relative '../app/models/animal'
require_relative '../app/models/user_animal'


hermione = User.new('hermione', 18)
teddy = User.new('teddy', 18)
erik = User.new('erik', 18)
alicia = User.new('alicia', 18)
greg = User.new('greg', 18)
russell = User.new('russell', 47)
kain = User.new('kain', 47)

mojo = Animal.new("mojo", "cat")
savannah = Animal.new("savannah", "cat")
appa = Animal.new("appa", "dog")
sidney = Animal.new("sidney", "dog")
rosie = Animal.new("rosie", "dog")

ua1 = UserAnimal.new(russell, savannah)


binding.pry 