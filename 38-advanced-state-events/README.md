# Bey-Slay


You are given an api.js file that exports an array of objects that look like this:
  > `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false }`

# What are we practicing?

- using both functional and class components
- deciding which component should make our api request
- deciding which component(s) should have state
- changing the state of a parent component from its child
- passing a callback function as a prop to be used by a child component
- manipulating objects inside of arrays in state
- reusing a component
- lifting state

# Deliverables:

- Render a list of all Beyonce images

- When a User clicks on a Beyonce image in `BeyContainer` it should change the `favorite` key of that object to `true`, which should then add that Beyonce to the FavoritesContainer. 

- When a User clicks on a Beyonce image in the `Favorites` container, it should change the `favorite` key of that object to `false`, which should then remove it from the FavoritesContainer and send an alert saying "I got a hot sauce in my bag, swag"


# Bonus

- Display the gif's `num_of_clicks` next to it's image
- Each time an image is clicked, the `num_of_clicks` should increase by 1
- Your Index should be sorted by most clicks. The image with the highest number of clicks should be the first image rendered, and the image with the lowest number of clicks should be the last image rendered

# Hint

- The gif below will give you an idea of what the app should look like
- Look up the window.alert() function

![beyonce gif](bey-slay.gif)


