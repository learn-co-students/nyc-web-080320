require 'pry'

class User
    attr_writer :ssn
    attr_accessor :name, :age  

    def initialize(name, age, ssn=1234)
        @name = name
        @age = age
        @ssn = ssn
    end
    

    def say_name
        puts "Hi, my name is #{@name}"
    end
end