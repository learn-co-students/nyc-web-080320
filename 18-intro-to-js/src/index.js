console.log("Welcome to Mod 3")


/*
 **Questions


 **Why JS?

  - three pillars - Coffee Dad Twitter

  1. Event Handling - listening to behavior occurring on and around the browser
  2. DOM Manipulation - controlling what is visible in the browser and what it does
  3. Communicating with the Server - making network requests to a HTTP API


  - request-response cycle



  - Single Page Applications 
    - a full, dynamic web application that runs without triggering a page reload

 
 **What is JS?

 - ECMAscript (European Computer Manufacturers Assoc.)
 - specification



 **How JS?

  - how to load JS into an HTML document
    - inline javascript inside the HTML tags
    - javascript code inside script tags in the HTML doc
    - script tags with src attributes *** <- we'll do this

  - debugger and console.log
 
  



 **Some data types
  - type checking
  - typeof variable

  - on object can have attributes and behviors
 
 - Number


 
 - String
 - `Let's interpolate some ${}` - template literal



 - Object Literals
 - { a: 1, b:2 }


 - Array



 - undefined


 ** Variables


 **Functions
  - multiple ways of declaring functions
  - definition vs invocation 



*/

// function declaration
function sayHi(name){
  console.log(`Hi there ${name}!`)
}

// function expression
const sayHello = function(firstName){
  console.log(`Hello there ${firstName}!`)
}

// arrow functions
const sayHowdy = firstName => {
  console.log(`Howdy ${firstName}`)
}

