//import all dependencies
var friends = require("../data/friends");


// routes
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    console.log(friends);
    return res.json(friends);
  });

  // POST method route
  app.post("/api/friends", function (req, res) {

    //build a user object
    var newUser = req.body;

    //Parse the anwers into interger again
    for (var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }

    console.log(newUser);

    //app logic
    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(newUser.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(newUser);

    //later write the change to the friends


    // send back to browser the best friend match
    console.log(friends[bestFriendIndex]);
  //look like below
  //   { name: 'Hydra',
  // photo: 'https://placeimg.com/300/200/any',
  // scores: [ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ] }

    res.json(friends[bestFriendIndex]);
    // goes to survey.htmls POST
   });
}

