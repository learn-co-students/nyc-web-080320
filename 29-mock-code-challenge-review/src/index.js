document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs/"

  const getDogs = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(dogs => {
      renderDogs(dogs)
    })
  }

  const renderDogs = dogs => {
    const body = document.querySelector('#table-body')
    body.innerHTML = ''
    for(let dog of dogs){
      renderDog(dog, body)
    }
  }

  const renderDog = (dog, body) => {
    const dogTr = document.createElement('tr')
    dogTr.dataset.dogId = dog.id

    dogTr.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td>
        <button>Edit</button>
      </td>
    `

    body.append(dogTr)
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.textContent === 'Edit'){
        const dogForm = document.querySelector('#dog-form') 
        const dogRow = e.target.closest('tr')
        const dogId = dogRow.dataset.dogId

        const cells = dogRow.children

        const name = cells[0].textContent
        const breed = cells[1].textContent
        const sex = cells[2].textContent

        dogForm.dataset.dogId = dogId
        dogForm.name.value = name
        dogForm.breed.value = breed
        dogForm.sex.value = sex
      }
    })
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()

      const dogForm = e.target

      let dogId = dogForm.dataset.dogId 
      let name = dogForm.name.value 
      let breed = dogForm.breed.value 
      let sex = dogForm.sex.value 
      
      const dog = {
        name: name,
        breed: breed,
        sex: sex
      }

      let options = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(dog)
      }

      fetch(baseUrl + dogId, options)
      .then(res => res.json())
      .then(dog => {
        getDogs()
      })
    })
  }
  
  submitHandler()
  clickHandler()
  getDogs()
})



/*

* On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs. The dog should be put on the table as a table row. The HTML might look something like this <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

1. get the dogs on page load
2. render the dogs

* Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information. On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).

1. click listener on the edit buttons
2. move the dog data into the form (how should I do this???)

* Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

1. submit listener
2. patch request
3. get dogs again

*/