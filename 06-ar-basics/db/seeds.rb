# require 'pry'

# User.destroy_all
# Animal.destroy_all
# UserAnimal.destroy_all


# here to demonstrate .new & .save   vs   .create
hermione = User.new({name: 'hermione', age: 18, ssn: 12345})
hermione.save 

User.create(name: 'teddy', age: 18, ssn: 12345)
User.create(name: 'erik', age: 18, ssn: 12345)
User.create(name: 'alicia', age: 18, ssn: 12345)
User.create(ssn: 12345, name: 'greg', age: 18 )
russell = User.create(name: 'russell', age: 47, ssn: 12345)
kain = User.create(name: 'kain', age: 47, ssn: 12345)

# .new will create the instance but not PERSIST IT
# if you need to do any checking before you save to the  DB
# .save

# create does .new and .save at the same time 

mojo = Animal.create(name: "mojo", species: "cat")
savannah = Animal.create(name: "savannah", species: "cat")
appa = Animal.create(name: "appa", species: "dog")
sidney = Animal.create(name: "sidney", species: "dog" )
Animal.create(name: "rosie", species: "dog")

UserAnimal.create(user: russell, animal: savannah)
UserAnimal.create(user_id: kain.id, animal_id: appa.id)

# binding.pry