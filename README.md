<h1>MY FRIENDFINDER</h1>

<hr>

<h1>CORE TECHNOLOGY USED</h1>

<hr>

<p>Express: helps you manage everything, from routes, to handling requests and views.

Path: provides a way of working with directories and file paths.

Bootstrap & font-awesome: A simple bootstrap for css purposes to keep all of the form questions in a grid like structure. 
Keeping things basic.

</p> 

<hr>

<h1>COMMANDS AND USER GUIDE</h1>

This app require you to enter in only two things... your name and your photo. 
After that, their are 10 questions the user must answer to be matched up to the friends in the database.
below is a js script I composed to see how they are initialized.

![survey_frontend_js](https://user-images.githubusercontent.com/48500455/59694897-50abf480-91b7-11e9-8a68-cb6fa8f08948.png)

After activating the submit button, our $.Post() sends the data to our server.js to require our api on line 16 below.

![server_js](https://user-images.githubusercontent.com/48500455/59698438-af746c80-91bd-11e9-94ad-ef38acc295b8.png)

Think of the code above being two buses at a bus terminal, hauling our data to the appropriate destination. From here we route our $.Post() data (I like to think of it as money) by the "newUser"  to match up with (purchase) the data (product: bus ticket) we have stored. Pay attention to the multiple for loops... its just like a cashier at a store (apiRoutes.js below) making calculations.

![api_to_friends_js](https://user-images.githubusercontent.com/48500455/59699235-3e35b900-91bf-11e9-9824-8120d1dd3699.png)

Check out friends.js file in my github... from there the data gets sent to the htmlroute.js through lines 6 - 8... then display through the modal code via the jquery on the survey.html page  

![jquery_modal](https://user-images.githubusercontent.com/48500455/59699837-3f1b1a80-91c0-11e9-9d1e-26b17e878c0a.png)

![modal_body](https://user-images.githubusercontent.com/48500455/59699879-4fcb9080-91c0-11e9-8d3a-5e290782b2b6.png)


