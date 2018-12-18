var friends = require("../app/data/friends");



module.exports = function (app) {

    app.get("/app/data/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/app/data/friends", function (req, res) {
        res.json(friends);
    });


};