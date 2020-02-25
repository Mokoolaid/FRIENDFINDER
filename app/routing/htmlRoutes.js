const path = require("path");
modules.exports = function (app) {

    app.get("/survey", function () {
        //returns the survey page

    });
    app.get("/*", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
}