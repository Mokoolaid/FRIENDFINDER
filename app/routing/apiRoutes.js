const friends = require("../data/friends.js");

modules.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    //returns friends
  });
  app.post("/api/friends", function(req, res) {
    console.log(friends);
    console.log(req.body);
    //returns best matches  and where we will be hitting the submit button
    for (let i = 0; i, friends.length; i++) {
      const score = friend.score[i];
      console.log(score);
    }
  });
};
