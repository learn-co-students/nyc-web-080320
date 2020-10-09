# react-stateevents-practice1

# Questions

- optimistic vs pessimistic
    - up to you but know how to do both
    - for optimistic maybe want to use a slug instead of id for a unique identifier
- callback
    - function named (){
        return 
    }
    - Arrow functions can work with expressions or body
    - () => console.log("this")
    - ()=> {
        let this = "that"
        console.log(this)
    }
- DogsContainer as parent
    - separation of concerns
- Reusing Components 




This is going to be a full scale practice of everything we've learned so far:

Create a Favorite Container

When a User clicks the Bark button the Dog should bark

When a User clicks on a Dog's image, the dog's favorite key should be flipped to true. This should persist, meaning when you refresh the page, the dog(s) that was favorited will continue to display in the favorites container

When a User clicks on a Dog's image from the Favorites Container, the dog should be removed from the Favorites Container

A User should be able to add a new Dog to the API. This should persist

A User should be able to Delete a dog from the API. Implement this whichever way you feel best but it must persist

A User can search for a dog by name in the Index but not the Favorites


![dog gif](state-pairing-gif.gif)
