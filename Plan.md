1. Need a HTML Skelaton - Create a wireframe
2. Create 1-3 User Stories per role. (Marketing research group, and the focus group using the app)

Technical Plan
1. Need 1 HTML page, 1 CSS. I will need app.js (page functionality) , utils.js (functions that use API interaction) , api.js (data about products) , and test pages (created with bootstrap).


Global State
1. Need number of selections
2. We will need times a product has appeared
3. Times a product has been chosen
4. Need previous displayed products
Variables Needed -> let randomProduct1
                    let randomProduct2
                    let randomProduct3


API.JS (DATA)
1. Need to make an array of the products and descriptions of each. I will be including an id, image and a name for each product to display.


UTILS.JS
1. This page is going to have my products class with various functions. 
 2. Need a function to get products by ID. getProductsById(). This will be used to grab products by id for various reasons(grabbing the image). This will be used to compare the id provided in the selectoin with every product id.
 3. Need a function to select a random product. getRandomProduct() . Will be used to generate random products for the 3 chosen for the case study.


APP.JS (What this page will be doing)
1. This page is going to be taking the functions from the utils.js and using them to manipulate things on the page. Creating queryselectors and using to create events.
 2. Need to create queryselectors for the img and radio tag inputs to record data of each time a product shows up and what the user selects
 3. Need to create an event listener for each time a product's radio tag is selected. This will incriment that product by 1. 
 4. Create if statement to compare the products from the selection before to the ones coming in to make sure there are no duplicates.
 5. After the user has selected 25 products disable the button and show the results.


TEST Pages
1. Testing my functions as I create them. TDD baby!