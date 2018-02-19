// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Initiate the listener.
app.listen(PORT, (error) => {
    if (error) {
        console.log("The app is busted");
    } else {
        console.log("listening on port:", PORT);
    }
});