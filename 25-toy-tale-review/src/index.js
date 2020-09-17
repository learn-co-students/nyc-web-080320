let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // ---------------------------

  const baseUrl = "http://localhost:3000/toys/"
  
  const renderToys = toys => {
    const toyCollection = document.querySelector('#toy-collection')
    for(let toy of toys){
      let toyDiv = renderToy(toy)
      toyCollection.append(toyDiv)
    }
  }

  const renderToy = toy => {
    const toyDiv = document.createElement('div')
    toyDiv.classList.add('card')

    toyDiv.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn" data-toy-id="${toy.id}">Like <3</button>
    `

    // toyCollection.append(toyDiv)
    return toyDiv
  }
  
  const getToys = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(toys => renderToys(toys))
  }
  
  const submitHandler = () => {
    const form = document.querySelector(".add-toy-form")

    form.addEventListener('submit', e => {
      e.preventDefault()

      const name = form.name.value
      const image = form.image.value

      const toy = {
        name: name,
        image: image,
        likes: 0,
      }

      form.reset()

      // get it on the DOM
      // const toyDiv = renderToy(toy)
      // document.querySelector('#toy-collection').append(toyDiv)
      
      // save it to the DB
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(toy)
      }
      
      fetch(baseUrl, options)
      .then(response => response.json())
      .then(toy => {
        const toyDiv = renderToy(toy)
        document.querySelector('#toy-collection').append(toyDiv)
      })

    })
  }

const clickHandler = () => {
  document.addEventListener('click', e => {
    if(e.target.matches('.like-btn')){
      const button = e.target
      const toyId = button.dataset.toyId
      const likesEl = button.previousElementSibling
      const newLikes = parseInt(likesEl.textContent) + 1

      // pessimistic rendering
      const options = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({ likes: newLikes })
      }

      fetch(baseUrl + toyId, options)
      .then(response => response.json())
      .then(toy => {
        likesEl.textContent = `${toy.likes} Likes`
      })

    }
  })
}
  
  getToys()
  submitHandler()
  clickHandler()
});



/*
Fetch Andy's Toys

On the index.html page, there is a div with the id "toy-collection."

When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.

Add Toy Info to the Card
Each card should have the following child elements:

h2 tag with the toy's name
img tag with the src of the toy's image attribute and the class name "toy-avatar"
p tag with how many likes that toy has
button tag with a class "like-btn"
After all of that, the toy card should resemble:

  <div class="card">
    <h2>Woody</h2>
    <img src=toy_image_url class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn">Like <3</button>
  </div>


  https://images-na.ssl-images-amazon.com/images/I/81BDQZEXrpL._AC_SL1500_.jpg

*/