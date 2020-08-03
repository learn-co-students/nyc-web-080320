require 'pry'


# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?

# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 

# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?

# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?

# 5. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?

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
    {name: "pearl", species: "cat"},
    {name: "savannah", species: "cat"},
]

animals[0][:name]


# 1. see a list of all pet names
# 2. see all of the pets by type (cat) 
# 3. find a pet by name 


def run(animals_array)
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

binding.pry 


### LEVEL UP 
# 1. let the user input a type they want to search by
# 2. let the user input a name and species to find an animal



#run  # invocation/execution/calling/using


## ICEBOX
## joisting 
    # pass by refernece or by value 
