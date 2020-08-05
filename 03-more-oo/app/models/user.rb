require 'pry'

class User
    attr_reader :views
    attr_writer :ssn
    attr_accessor :name, :age
    @@all = []

    def initialize(name, age, ssn=1234)
        @name = name
        @age = age
        @ssn = ssn
        @views = 0
        @@all << self
    end

    def self.all
        @@all
    end

    def view_profile
        puts "Your name is #{self.name}"
        puts "Your age is #{self.age}"
        puts "Your views is #{self.views}"
        increment_views ## through self we'll get the private error 
    end

    
    # instance methods
    def say_name
        puts "Hi, my name is #{self.name}"
        # @name is super direct 
        # self.name goes to the name getter method which is just returning @name
    end

    private
    
    def increment_views
        @views += 1
    end

end