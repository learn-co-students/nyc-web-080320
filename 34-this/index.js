console.log("this is so much fun!")

/************ Execution Context ***********************/

/* In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.

Every Execution Context entails the variables, objects, and functions available at a particular time and also contains a reference to a this object. 

This is determined *contextually* at the time of invocation.
*/


/************ Default Binding with a Standalone Function Invocation ***********************/

// in a simple function call, `this` will be the window object (or the global object in Node)
// the default binding for a simple function call in the global context will be the window object

this.title = "Window book title"

function printBookTitle(pageCount){
  console.log("This is: ", this)
  console.log(`The title of the book is ${this.title} and it has ${pageCount} pages`)
}


/************ Implicit Binding with Function called on a Context Object **********/

// `this` references the object executing the current function, we can call this object the "context object" or the "calling object"

const ij = {
  title: "Infinite Jest",
  author: "David Foster Wallace",
  sayBookAuthor: function(){
    console.log(`The author of the book is ${this.author}`)
  },
  printBookTitle: printBookTitle
}

// note - a function can lose its implicitly bound this as in the case of a callback
// the callback loses its implicit this binding to the brave object
// document.querySelector('#header').addEventListener("click", ij.printBookTitle)


/************ Explicit binding with Bind/Call/Apply ******************/

// thisArg is an object we want to be used as the `this` object in a given context

const dune = {
  title: "Dune",
  author: "Frank Herbert",
  sayBookAuthor: function(){
    console.log(`The author of the book is ${this.author}`)
  }
}

// call and apply will invoke the function immediately
// printBookTitle.call(dune, 600) // call take commas
// printBookTitle.apply(dune, [600]) // apply takes an array


// bind will return a bound function to be invoked later 
// it will remember the thisArg bound to it
let boundDune = printBookTitle.bind(dune, 600)

// this explicitly binds the dune object to the callback function
document.querySelector('#header').addEventListener("click", dune.sayBookAuthor.bind(dune))

/************ Constructor Function Called with New Keyword ***********/

// one of the things the `new` keyword does is that it creates an empty POJO and binds it as the `thisArg` of the constructor function

function Book(title, author){
  this.title = title
  this.author = author
}

const hp1 = new Book("Harry Potter 1", "JKR")

/*
The above constructor function would look like this using class syntax

class Book{
  constructor(title, author){
    this.title = title
    this.author = author
  }
}

*/


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the enclosing (function or global) scope
// cannot use `call`, `apply`, or `bind` with arrow function
// arrow functions are not great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable


const stranger = {
  that: this,
  title: "Stranger in a Strange Land",
  author: "Robert Heinlein",
  printBookTitle: function(){
    console.log("This is: ", this)
    console.log(`The title of the book is ${this.title}.`)
  },
  printBookAuthor: () => {
    console.log("This is: ", this)
    console.log(`This book was written by ${this.author}`)
  }
}


