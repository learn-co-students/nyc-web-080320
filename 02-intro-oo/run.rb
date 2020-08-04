require 'pry'
require_relative './app/models/user'

# Pet CLI App
animals = [
    {name: "mojo", species: "cat", speak: 'meow!'},
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
    {name: "pearl", species: "cat"},
    {name: "savannah", species: "cat"},
]

def animals_cli(animals_array)
    puts "Welcome to 080320 Pet Shop"
    puts "What would you like to do?"
    puts "Press 1 for a list of all pet names"
    puts "Press 2 for a list of all cats"
    puts "Press 3 to find an animal by name"
    user_input = gets.chomp # removes whitespace and newline characters
    if user_input == "1"
        animals_array.map do |animal|
            animal[:name]
        end
    elsif user_input == "2"
        animals_array.filter do |animal|
            animal[:species] == "cat"
        end
    elsif user_input == "3"
        puts "Which animal are you looking for?"
        animal_name = gets.chomp
        animals_array.find do |animal|
            animal[:name] == animal_name
        end
    end 
end







def run 
    puts "Welcome, please sign up"
    puts "What is your name?"
    name = gets.chomp 
    puts "What is your age?"
    age = gets.chomp 
    puts "What is your social security number?"
    ssn = gets.chomp 
    user = User.new(name, age, ssn)
    # binding.pry

    puts "Do you want view your profile? (y/n)"
    choice = gets.chomp
    if choice == "y"
        puts "Your name is #{user.name}"
        puts "Your age is #{user.age}"
        # puts "Your ssn is #{user.ssn}"
    elsif choice == "n"
        puts "Do you want to change anything in your profile? (y/n)"
        change = gets.chomp
        if change == "y"
            puts "What would you like to change?"
            user_input = gets.chomp
        end
    end

end


binding.pry 
