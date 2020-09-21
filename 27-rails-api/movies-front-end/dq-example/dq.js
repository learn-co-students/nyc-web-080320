/*
Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/dq.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

√1. add click listener to the button
√2. on click, do a GET request to the api to get a user
3. extract the info from the response that we're interested in and put it on the DOM

*/

document.addEventListener("DOMContentLoaded", e => {
  
  const clickHandler = () => {
    const button = document.querySelector('button')
    
    button.addEventListener('click', e => {
      fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        const user = data.results[0]
        renderUser(user)
      })
    })
  }

  const renderUser = user => {
    console.log(user)

    const image = user.picture.large
    document.querySelector('#profile_picture').src = image
    
    const title = user.name.title
    const firstName = user.name.first
    const lastName = user.name.last

    document.querySelector('#fullname').textContent = `${title} ${firstName} ${lastName}`
  }
  
  clickHandler()
})