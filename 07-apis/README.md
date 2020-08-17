# Working with APIs


## APIs... what are they and why do I care?
- We know to build a DB (ruby & SQL)
- A way to expose parts of your DB to other users
- Define how those users should be able to access your DB info 
- Request & Response =====> Mod2 
     to say...  Google's auth api 
- Twitter API, OpenData (311), Youtube Analytics API, AWS, IMDB, 7digital
- BIGGEST HANGUP - read the docs and know the format of the info you're getting back

## CRUD Actions!!! ====> HTTP verbs 
C - create   ====> post
R - read    ====> get 
U - update ====> patch (or put)
D - delete ====> delete 

## RestClient and sending requests from your ruby app

## Let's build a little CLI 


- Endpoints when we look at sample APIs


## Steps
1. Decide on your API and look through the docs; which endpoint do I need for which resources that I need?
2. Make the request to the endpnt you need, save response
3. Parse response using JSON library to get the data
4. Use the response data in your application (in our case, to seed)
