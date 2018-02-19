const path = require("path");

module.exports = function(app) {
    // ====================HTML Routes================================

    app.get("/", function(req, res) {

        // homepage served
        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

    app.get("/survey", function(req, res) {

        // survey page served
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


    app.get('/*', function(req, res) {

        // if no matching route then default to home
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};