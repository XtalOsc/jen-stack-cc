var express = require('express');
var app = express();
var portDecision= process.env.PORT || 3001;
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.listen(portDecision, function(){
  console.log('server listening');
});//end listen

app.get ('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//static public folder
app.use (express.static('public'));

app.post('/joke',urlencodedParser, function(req,res){
  console.log('joke path hit', req.body);



  //assemble objectToSend
  var objectToSend = {
    whoseJoke: "",
    jokeQuestion: "",
    punchLine: ""
  }
  //send objectToSend back to client
  res.send(objectToSend);
});//end /joke post







// initial jokes provided by the client
// jokes = [
//   {
//     whoseJoke: "Huck",
//     jokeQuestion: "What's the difference between roast beef and pea soup?",
//     punchLine: "Anyone can roast beef."
//   },
//   {
//     whoseJoke: "Millie",
//     jokeQuestion: "What do you call a pile of cats?",
//     punchLine: "A meowntain!"
//   },
//   {
//     whoseJoke: "dEv",
//     jokeQuestion: "Why should you not play cards in the forest?",
//     punchLine: "Too many Cheetahs"
//   }
// ];
