console.log("listening is loaded")

// As a user, when I click on the welcome image I want to see a turquoise border around that image

// √1. get the image from the DOM
// √2. add a click listener to the image
// 3. implement some code to change the border style

const welcomeImage = document.querySelector("#welcome-image")

// addEventListener registers the listener with the browser

welcomeImage.addEventListener('click', function(e){
  console.dir(e.target)
  const image = e.target
  image.style.border = "solid thick turquoise"

})


// As a user, when the mouse moves over the welcome image I want to see a picture of a baby sloth, and I want the picture to change back when the mouse moves off the image



























































