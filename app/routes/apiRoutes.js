var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/data/friends", function (req, res) {
        res.json(friends);
    });

};