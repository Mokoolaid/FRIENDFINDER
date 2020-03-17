const path = require("path");
//returns the survey page
modules.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/home.html"));
  });
  // returns the homepage
  app.get("/*", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/home.html"));
  });
};
