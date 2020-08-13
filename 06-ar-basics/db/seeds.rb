User.destroy_all

hermione = User.new({name: 'hermione', age: 18, ssn: 12345})
hermione.save 

User.create(name: 'teddy', age: 18, ssn: 12345)
User.create(name: 'erik', age: 18, ssn: 12345)
User.create(name: 'alicia', age: 18, ssn: 12345)
User.create(name: 'greg', age: 18, ssn: 12345)
User.create(name: 'russell', age: 47, ssn: 12345)
User.create(name: 'kain', age: 47, ssn: 12345)

# .new will create the instance but not PERSIST IT
# if you need to do any checking before you save to the  DB
# .save

# create does .new and .save at the same time 

