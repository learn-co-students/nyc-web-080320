require 'pry'

class User
    # # attr_reader :name just to access infomation 
    # def name 
    #       @name
    # end
    attr_writer :ssn
    # def ssn=(new_ssn)
    #     @ssn=new_ssn
    # end 

    attr_accessor :name, :age # attr_reader & attr_writer 

    def initialize(name, age, ssn=1234) # anything you want the instnace created with
        ## remember our own information
        @name = name
        @age = age
        @ssn = ssn
    end
    

    ## Methods
    def say_name
        puts "Hi, my name is #{@name}"
    end
    
end

caryn = User.new("caryn", 80)
rachael = User.new("rachael", 21)
jhonny = User.new("jhonny", 22)
alicia = User.new("alicia", 23)
    # .new ==> look for the initialize
    # if there are arguments, pass those into the initialize method

# rachael.name 

# binding.pry

# puts rachael 