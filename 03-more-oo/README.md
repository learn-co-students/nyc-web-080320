# More on Object Orientation

## OO Practice Project Pt 1
0. Really really you can always @0803instructors 
1. File structure: all classes in their own file and app/models/model_name.rb
2. Attr's vs your own methods 
3. controlling your data types... .to_iage
4. Consider this a playground 

## Questions
- OO Person related
- self.hygiene vs @hygiene   ===> @@all vs. self.all
- if you use attr's DONT write your own methods 
- can you use attr's and set constraints ==> nope 
        - happiness & hygiene setting was an issue

@@all = [] all... Users, Animals, any instances of a class 


## Recap
- instance variables
- initializing a new instance
- attr's / readers and writers

instances are objects, we can use methods on those to interact with them
classes are objects as well, blueprints also will have methods to interact

## Agenda
- Class methods
- `self`
- private methods

- A `User` should be able to log in
- A `User` should be able to introduce themselves
    - `User#introduce` should return a string that says "Hi, my name is _____"
- A `User` should be able to keep track of number of profile views
    - `User.views` should return the number of times a user's profile has been viewed
    - Everytime a user's profile is viewed a message should puts to the screen saying "here is your profile"




Time permitting...
- A `Animal` class with a name (read and write-able) and a species (readable)
- `Animal.all` should return a list of all animal instances
- `Animal.find_by_name` should take in a string and return the animal with that name
- `Animal.find_by_species` should take a strihng and return a list of all animals of that species



## Icebox
- We aren't really saving all these instances in array's right? Nope! We'll use tables to store data later
- Hoisting in Ruby OO article (find again)