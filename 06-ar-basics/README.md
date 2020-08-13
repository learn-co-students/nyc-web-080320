# Active Record Basics

## Questions
- DQ: SQL & inheritance from modules 
- Setting up your AR environment - I'll provide a repo to fork to start your projects! 

## Why Active Record?
- SQL -- language the query the database 
      -- so... why?!?
      1. need to understand what ORMs are doing for us
      2. You might write it on the job 
      3. You might be asked about it on a job interview
- ORM -- wrap SQL for us so we can write other code that will execute SQL commands on our behalf
      -- some.. you still have to SQL
      -- other like Active Record you'll write almost no SQL
- Active Record 
      -- other like Active Record you'll write almost no SQL
      -- gives you a lot of infrastructure
      -- that infrastructure relies on *assumptions* which rely on *rules*


## From OO to Active Record

- Review Tables
- Rake & Migrations
- Models 

### Before our ecosystem was simpler

OO Classes/Model --- Ruby
Tables/DB --- Rake & Active Record 

1. If I make a table, I SHOULD make a class ===> table gives me persistence, class lets me interact wit hit in ruby
2. If I have a class, I should create a table ONLY if I want persistence 
  We have a game, and we only store score info at the end of each level
  So we can have a class to define behavior for *during* the level that doesnt need to be saved

Persistence == store *in memory* it so it's not temporary just in my console for instance

1. New behavior to manipulate an instance ===> ruby
2. If I need to add a new table to DB ===> rake
3. If I need to add an attribute to an existing model ===> rake migrations

### Afternoon -- Associations
- One to Many
- Many to Many 







### Icebox
- SQL videos / blogs 
  - sqlzoo.net
  - Socratica on YouTube had a bunch of videos on SQL
  - Udemy?
  - Check Additional Practices 
  - Adam S got some tests! 
- Why didn't that update work? *cause I should've been using .update*
- Questions about deletion (production best practices)
- Read only attributes 
  - create a private reader for that attribute in Ruby that will overwrite the AR reader
  - don't expose that update behavior to the user 
  - attr_readonly (but this fails silently)