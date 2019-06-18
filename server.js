//import all dependencies
//var bodyParser = require("body-parser");
var express = require("express");
var app = express();


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set up our routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start the server
app.listen(PORT, function() {
    console.log("App listening on : http://localhost:" + PORT);   
});
