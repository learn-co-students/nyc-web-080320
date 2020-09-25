console.log("functions & stuff")

/*

1. SCOPE

  a. Global Scope
  b. Function Scope
  c. Block Scope

2. HOISTING

3. VARIABLE DECLARATION

4. FIRST CLASS FUNCTIONS

  a. callbacks
  b. closures
  c. higher order functions

5. PASS BY VALUE VS PASS BY REFERENCE

  a. pass by value
  b. pass by reference

*/

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. SCOPE
/* 
- Lexical scoping uses the location where a variable is declared within the code to determine where that variable is available
- nested function have access to variables declared in their outer scope
- function can reach "up" to higher scope to access variables declared there, but the reverse does not work
- Lexical Scoping means that in a nested group of functions, 
the inner function have access to the variables and other resources of their parent scope.
*/

  // a. Global Scope
  // variables declared in the global scope are visible/available within that scope and any nested functions

  // let dog = "George"

  // const sayHiToDog = () => {
    // console.log(`Hi there ${dog}`)
  // }

  // sayHiToDog()



  // b. Function Scope
  // variables declared in function scope are visible within the function and any nested functions inside of it, but not visible from outside of the function
  
  // function something() {
  //   const dog = "George"
  //   console.log(`Hi there ${dog}`)

  //   function thing(){
  //     console.log("Inside the nested function", dog)
  //   }

  //   thing()
  // }

  // something()

  // console.log(dog)


  // c. Block Scope
  // variables declared in block scope are visible within the block and any nested functions inside of it, but not visible from outside of the block
 
  // if(true){
  //   const dog = "George"
  //   console.log(dog)
  // }

  // console.log(dog)
  
// ---------------------------------------------------------------------------------------------------------------------------------
// 2. HOISTING
/* 
when JS is being compiled, certain functions and variables are "hoisted" to the top of whatever scope they're in - variable definitions don't come along for the ride
*/

// variables declared with `var` are hoisted, `let` and `const` are not

// console.log("first", dog)

// var dog = "George"

// console.log("second", dog)

// function declarations are hoisted, arrow functions and function expressions are not

// bark()
// meow()

// function bark(){
//   console.log("woof woof")
// }

// const meow = function(){
//   console.log("meow meow")
// }



// ---------------------------------------------------------------------------------------------------------------------------------
// 3. VARIABLE DECLARATION
  // a. var
  // don't user var
  // variables declared with var can be both redeclared and redefined

  // var dog = "George"
  // var dog = "Perky" // <= redeclaring the variable
  // dog = "Neikko" // <= redefining the variable


  // b. let
  // let allows us to redefine a variable, but not redeclare it

  // let dog = "George"
  // dog = "Perky"

  // let dog = "Neikko" // <= will throw an error, cannot redeclare


  // c. const
  // const does not allow us to either redeclare or redefine a variable

  // const dog = "George"
  // dog = "Perky"
  // const dog = "Neikko"


  // this is allowed - you can change the properties of an object declared with const but cannot redefine the variable iteself
  // const dog = {
  //   name: "George",
  //   breed: "Ewok"
  // }

  // dog.breed = "poodle cross"
  // dog.favToy = "this octopus thing"

  
// ---------------------------------------------------------------------------------------------------------------------------------
// 4. FIRST CLASS FUNCTIONS

  /* 
  languages are said to treat functions as first class citizens 
  when they treat functions like other objects, meaning they can be
  assigned to variables, they can be passed around as arguments,
  or they can be assigned as properties inside objects.
  */

  // a. callbacks 
  // when functions are passed as arguments to other functions

  const myMap = (array, callback) => {
    const newArray = []

    for(let item of array){
      const newItem = callback(item)

      newArray.push(newItem)
    }

    return newArray
  }
  
  // b. higher order functions
  // functions that accept functions as parameters or that return other functions

  const multiply = num1 => {
    return num2 => {
      return num1 * num2
    }
  }

  
  // c. closures
  // a closure is when a function is able to remember and access its
  // scope even when that function is executing outside of its original scope
  // a function with a backpack, a function with baggage

  const doubler = multiply(2)

  doubler(4) // <= doubler carries the "2" around in its backpack


// ----------------------------------------------------------------------
// 5. PASS BY VALUE VS PASS BY REFERENCE

  // a. pass by value

  // primitives (numbers, strings, undefined, booleans, null) are pass by value meaning a new copy of them is created

  // let a = 1
  // let b = a
  // b = 5
  
  // b // => 5
  // a // => 1



  // b. pass by reference

  // objects (including arrays and functions) are pass by reference meaning two different variables point to the same object

  // let dog = { name: "George" }
  // let canine = dog
  // canine.breed = "Ewok"

  // dog.breed // => "Ewok"