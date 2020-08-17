require 'rest-client'
require 'json'
require 'pry'

User.destroy_all
Animal.destroy_all
UserAnimal.destroy_all

users_response = RestClient.get("http://localhost:3000/users")
users_data = JSON.parse(users_response)

animals_response = RestClient.get("http://localhost:3000/animals")
animals_data = JSON.parse(animals_response)

users_data.each do |u|
    User.create(u) # api also had hair_color, height
    # also want to include isFlatironGrad 
    # new_user = User.new(u)
    # new_user.isFlatironGrad = false
    # new_user.save
end

animals_data.each do |animal|
    Animal.create(animal) 
end

UserAnimal.create(user: User.find_by(name: "Russell"), animal: Animal.second)
UserAnimal.create(user: User.first, animal: Animal.first)
UserAnimal.create(user: User.third, animal: Animal.second)


# binding.pry 

# seed using FB's API to grab users 
# hermione = User.create(name: 'hermione', age: 18, ssn: 12345, password: 123)
# russell = User.create(name: 'russell', age: 47, ssn: 12345, password: 123)
# kain = User.create(name: 'kain', age: 47, ssn: 12345, password: 123)
# User.create(name: 'alicia', age: 18, ssn: 12345, password: 123)
# User.create(name: 'teddy', age: 18, ssn: 12345, password: 123)
# User.create(name: 'erik', age: 18, ssn: 12345, password: 123)
# User.create(ssn: 12345, name: 'greg', age: 18 , password: 123)

# seed from PetFinder's API 
# mojo = Animal.create(name: "mojo", species: "cat")
# savannah = Animal.create(name: "savannah", species: "cat")
# appa = Animal.create(name: "appa", species: "dog")
# sidney = Animal.create(name: "sidney", species: "dog" )
# rosie = Animal.create(name: "rosie", species: "dog")


