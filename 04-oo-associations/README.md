# Ruby OO Relationships/Associations (One to Many)

## Questions
- Pattern for architecting relationships 
- *how* do songs know they belong to the artist (belongs-to)
- *how* does the artist know which songs are its (has-many)

## Agenda
- Types of Associations 
- One to Many/Has Many, Belongs to


## Types of Associations
Artist -> Songs
Posts -> Tags  ## many-to-many 

One-to-Many
     has_many  ====> Artist // User
     belongs_to ====> Song  // Animal
        holds the reference to the instance of the other class that it belongs to
        ie the animal wears the collar that points to its owner

Many-to-Many
    has_many, through


## Deliverables 
- an animal needs to belong to a user
- an animal needs to know who its user is 
- an owner should also know who all of its animals are