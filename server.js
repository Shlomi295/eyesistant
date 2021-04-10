var express = require("express"),
    app = express();


//DB

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser2021:m7EeKkKON5miaG1A@eyesistantcluster.agziq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("eyesistantDb").collection("text");
  // perform actions on the collection object
  console.log('connected')
  client.close();
});



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
