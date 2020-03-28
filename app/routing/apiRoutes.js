const friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    //returns friends
  });
  app.post("/api/friends", function(req, res) {
    const user = req.body;
    console.log(friends);
    console.log(req.body);

    let bestScore = 50;
    const bestMatch = friends[0];

    for (let i = 0; i, friends.length; i++) {
      let totalScore = 0;
      const friend = friends[i];

      //returns best matches  and where we will be hitting the submit button
      for (let i = 0; i, friends.scores.length; i++) {
        const friendScore = currentFriend.scores[i];
        const userScore = req.body.scores[i].parseInt();

        totalScore += Math.abs(currentFriendScore - userScore);
      }
      console.log(`Name: ${currentFriend.name} Score: ${totalScore}`);
      if (totalscore < bestScore) {
        bestScore = totalScore;
        bestMatch = currentFriend;
        bestMatch.name = friends[1].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendScore = totalScore;
        console.log(friendSore + "totalScore");
      }
    }
    res.jason(bestMatch);
  });
};
