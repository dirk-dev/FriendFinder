var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/data/friends", function (req, res) {
        var newFriend = req.body;
        var totalDifference = 1000;
        var currentDifference = 0;
        var bestMatch;

        //loops through the array of friends objects
        for (let i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            currentDifference = 0;
            //loops through the array of answers in each friend
            for (let j = 0; j < currentFriend.scores.length; j++) {
                currentDifference += Math.abs(currentFriend.scores[j] - newFriend.scores[j]);
            }
            if (currentDifference < totalDifference) {
                bestMatch = currentFriend;
                totalDifference = currentDifference;
            }
        }
        res.json(bestMatch);
        console.log(bestMatch);
        alert(bestMatch);
    });

};