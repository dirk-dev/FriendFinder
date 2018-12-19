var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//needed to make css stylesheets work
app.use(express.static('app/public'))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
})