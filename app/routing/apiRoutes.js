var friendsArray = require("../data/friends");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        // Code to find best match

        // Initialize array to hold comparison results
        var logic = 100;
        var bestFriend;
        var newFriendArry = [];

        var newFriendScores = Object.values(req.body)[2];

        newFriendScores.forEach(function(element) {
            parseInt(element);
            newFriendArry.push(element);
        });

        var newFriendScore = newFriendArry.reduce((a, b) => a + b, 0);
        //console.log(newFriendArry);

        //For loop through each friend in friends
        for (var i = 0; i < friendsArray.length; i++) {

            // Array to total the differences in scores for potential matches
            var compArray = [];

            var friendsArrayScores = Object.values(friendsArray[i])[2];

            friendsArrayScores.forEach(function(element) {
                parseInt(element);
                compArray.push(element);
            });

            var matchScore = compArray.reduce((a, b) => a + b, 0);

            //console.log(matchScore);

            if (matchScore < logic) {
                logic = matchScore;
                bestFriend = friendsArray[0];
            }
        }

        // Return best match to client
        res.json(bestFriend);


        // Add current user to friendsArray
        friendsArray.push(req.body);
    });
};