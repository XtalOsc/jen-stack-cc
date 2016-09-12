console.log('joke.js sourced');


$(document).ready(function(){
  console.log('doc ready');

  $('#sendJoke').on('click',function(){
    console.log('joke');

//assemble objectToSend
var objectToSend={
  whoseJoke: "Huck",
  jokeQuestion: "What's the difference between roast beef and pea soup?",
  punchLine: "Anyone can roast beef."
};//end objectToSend

//ajax call to /joke route
$.ajax({
  type: 'POST',
  url: '/joke',
  data: objectToSend,
  success: function(data){
    console.log('in success');

  }//end success
});//end doc ready

  });//end on click

});//end doc ready
