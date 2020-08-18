# Object Relations Practice

We have four models: `Recipe`, `Restaurant`, `RestuarantOwner` and `MenuItem`. 

A `RestaurantOwner` has many `Restaurant`s and a `Restaurant` belongs to a `RestaurantOwner`. A `Restaurant` has many `MenuItem`s and a `Recipe` has many `MenuItem`s. A `MenuItem` belongs to a `Restaurant` and a `Recipe`. 

**Note**: You should draw your domain on paper or on a *whiteboard before you start coding*. Remember to identify a single source of truth for your data.

## Instructions

Fork this repository and add your instructor as a collaborator.

To get started, run `bundle install` while inside of this directory.

Build out all of the methods listed in the deliverables. Commit after each section of deliverables (ie Initializers, Readers, and Writers is one section). If directed to by your lead, please wait for feedback before tackling additional deliverables. You can also do this by choice. In either case, make sure to message your lead when you have deliverables pushed for review. 

## Deliverables

Write the following methods in the classes in the files provided. Feel free to build out any helper methods if needed.

Deliverables use the notation `#` for instance methods, and `.` for class methods.

**TESTING:** As you build ensure you are testing every method by running `ruby tools/console.rb`, creating instances, and checking each method one by one! 

### Initializers, Readers, and Writers
- For these, the initialize is described as well was what attribute can(not) be changed after initialization. Use those descriptions to determine the appropriate readers and writers.


#### Recipe
- `Recipe#initialize(name, description)`
  - A recipe should be initialized with a `name` (string) and a `description` (string).
  - The name **cannot** be changed after the recipe is initialized.
  - The description can be changed after the recipe is initialized.
  - Both name and description are readable
- `Recipe.all`
  - Returns an array of all recipe instances that have been created.

#### Restaurant
- `Restaurant#initialize(owner, name, star_rating)`
  - A restaurant should be initialized with a `RestaurantOwner` instance, a `name` (string) and a `star_rating` (integer).
  - The name and star_rating can be changed after the restaurant is initialized.
  - Both name and star_rating are readable.
- `Restaurant.all`
  - Returns an array of all restaurant instances that have been created.

#### RestaurantOwner
- `RestaurantOwner#initialize(name, age)`
  - A restaurant_owner should be initialized with a `name` (string) and an `age` (integer).
  - The name and age can be changed after the restaurant_owner is initialized.
  - Both name and age are readable.
- `RestaurantOwner.all`
  - Returns an array of all restaurant_owner instances that have been created.

#### MenuItem
- `MenuItem#initialize(restaurant, recipe, price)`
  - A menu_item should be initialized with a `Restaurant` instance, a `Recipe` instance and a `price` (float).
  - The price can be changed after the menu_item is initialized.
- `MenuItem.all`
  - Returns an array of all menu_item instances that have been created.



### Object Relationship Methods

#### Recipe
- `Recipe#menu_items`
  - returns an array of all the `MenuItem` instances for the `Recipe`.
- `Recipe#restaurants`
  - returns an array of all the `Restaurant` instances that have the `Recipe` on their menu.

#### Restaurant
- `Restaurant#menu_items`
  - returns an array of all the `MenuItem` instances for the `Restaurant`.
- `Restaurant#owner`
  - returns the `RestaurantOwner` instance associated with the `Restaurant` instance
- `Restaurant#recipes`
  - returns an array of all the `Recipe` instances that are on this `Restaurant`s menu.

#### RestaurantOwner
- `RestaurantOwner#restaurants`
  - returns an array of `Restaurant` instances associated with the `RestaurantOwner` instance.
- `RestaurantOwner#menu_items`
  - returns an array of `MenuItem` instances associated with any of the `RestaurantOwner`s `Restaurant` instances.

#### MenuItem
- `MenuItem#recipe`
  - returns the `Recipe` instance associated with the `MenuItem` instance
- `MenuItem#restaurant`
  - returns the `Restaurant` instance associated with the `MenuItem` instance
- `MenuItem#owner`
  - returns the `Owner` instance associated with the `MenuItem` instance



### Aggregate and Association Methods

#### Recipe
- `Recipe#average_price`
    - returns the average price (integer) for all `MenuItem` instances of this `Recipe` instance. 
- `Recipe#highest_price`
  - returns the highest price (integer) for all `MenuItem` instances of this `Recipe` instance. 
- `Recipe#cheapest_restaurant`
  - returns the `Restaurant` instance where this `Recipe` instance is the cheapest. 
- `Recipe.inactive`
  - returns an array of `Recipe` instances that are not currently being sold at any restaurants.

#### Restaurant
- `Restaurant#has_dish?(recipe)`
    - returns `true` if the dish is on the menu at the given restaurant and `false` if it is not. 
- `Restaurant.highest_rated`
    - returns the highest rated `Restaurant` instance.

#### RestaurantOwner
- `RestaurantOwner.average_age`
  - returns the average age of all the `RestaurantOwner`s
- `RestaurantOwner#sell_restaurant(restaurant, buyer)`
  - transfers ownership of a `Restaurant` instance (which must belong to the current user) to the `buyer` which is a `RestaurantOwner` instance. 

#### MenuItem
- `MenuItem.most_expensive_item`
    - returns the most expensive `MenuItem` instance



 







