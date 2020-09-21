// myMap(array, callback) => some new array

const myMap = (array, callback) => {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const newItem = callback(item)
    newArray.push(newItem)
  }

  return newArray
}

// something('stuf')

// const something = function something(n){
//   console.log(n)
// }

// const otherThing = n => {
//   console.log(n)
// }