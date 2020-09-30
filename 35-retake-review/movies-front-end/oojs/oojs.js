console.log("Let's make some dogs... 🐕")

// POJO - Plain Ol' JavaScript Objects

// let george = {
//   name: "George",
//   breed: "Ewok",
//   talk: function(){
//     console.log("Hey there")
//   }
// }

// let perky = {
//   name: "Perky",
//   breed: "German Shepherd",
//   talk: function(){
//     console.log('Hey there')
//   }
// }

// Constructor Function

// function Dog(name, breed){
//   this.name = name
//   this.breed = breed

//   // this.talk = function(){
//   //   console.log("Hey there")
//   // }
// }

// Dog.prototype.talk = function (){
  // console.log(`hi there my name is ${this.name}`)
// }

// Dog.prototype.name = "Neikko" // <= all dogs would be named Neikko

// let george = new Dog("George", "Ewok")
// let perky = new Dog("Perky", "German Shepherd")


// Class

// class Dog {
//   constructor(name, breed){
//     this.name = name
//     this.breed = breed

//     Dog.all.push(this)
//   }

//   talk(){
//     console.log(`hi there my name is ${this.name}`)
//   }

//   static all = []
  
//   static speak(){
//     console.log("woof")
//   }

//   static findByName(name){
//     return this.all.filter(dog => dog.name === name)[0]
//   }
// }


// let george = new Dog("George", "Ewok")
// let perky = new Dog("Perky", "German Shepherd")

// Subclass

class Animal {
  constructor(legCount){
    this.legCount = legCount
  }

  dance(){
    console.log("dancing")
  }
}

class Dog extends Animal {
  constructor(name, breed, legCount){
    super(legCount)
    this.name = name
    this.breed = breed

    Dog.all.push(this)
  }

  talk(){
    console.log(`hi there my name is ${this.name}`)
  }

  static all = []
  
  static speak(){
    console.log("woof")
  }

  static findByName(name){
    return this.all.filter(dog => dog.name === name)[0]
  }
}


let george = new Dog("George", "Ewok", 8)
let perky = new Dog("Perky", "German Shepherd", 4)