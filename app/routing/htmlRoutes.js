//import all dependencies
var path = require("path");
// routes
module.exports = function (app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });  
  
  // app.get("/all", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  //If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}

