var express = require("express"),
    app = express();

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb+srv://dbuser2021:m7EeKkKON5miaG1A@eyesistantcluster.agziq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// async function openConnection(){
//   const client = new MongoClient(url, {useNewUrlParser:true ,useUnifiedTopology: true })
//   client.connect(err=>{
//     if (err) throw err;  
//     return client.db("eyesistantDb").collection("text");
//   });
// }

 async function addDocument(){
  var MongoClient = require('mongodb').MongoClient;
  const url = "mongodb+srv://dbuser2021:xiixi3K66G8hkKoP@eyesistantcluster.agziq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("eyesistantDb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("text").insertOne(myobj, function(err, res) {
      if (err) return err;
      console.log("1 document inserted");
      db.close();
    });
  });

}

app.get("/", function(request, response){ //root dir
  response.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 5050;
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get('/analyze', function(request, resposne){
  var text = request.query.text;
  console.log(text)
  addDocument()
  resposne.end('Thank You')
})

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
