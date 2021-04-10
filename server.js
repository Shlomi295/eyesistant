var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;
//this is my first comment to make sure it's committing to the git repo
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
