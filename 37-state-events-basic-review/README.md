# react-stateevents-practice1

# Questions

- import/export
  - functions vs class components
  - named vs default 
- syntax
  - adding attributes => props
    - object => send the object 
  - css/design
    - class => className

# Deliverables

You have a fake api response that is being exported from `api.js`. The response is an array of multiple `dog` objects that look like this:

  > `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list of dog images and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText that says "Bark"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

<!-- Container -->
- Renders multiple child components 
- Responsible for making intial GET request and MOST other AJAX requests




Below you will find a gif of the completed app

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](state-pairing-gif.gif)
