console.log('joke.js sourced');


$(document).ready(function(){
  console.log('doc ready');

  $('#sendJoke').on('click',function(){
    console.log('joke');

    // assign values
    var jokeAuthor = $('#whoseJoke').val();
    var jokeQuestion = $('#jokeQuestion').val();
    var punchline = $('#punchLine').val();
    console.log('Author: ',whoseJoke,' Question: ',jokeQuestion, 'Punchline: ', punchLine);


    // assemble object to send to server
    var sendObject= {
      Author: jokeAuthor,
      Question: jokeQuestion,
      type: punchline

    }//end sendObject

    //
    // var jsonObject = JSON.parse(strJson);
    var displayJokes = function(){
      for (var i = 0; i < objectToReturn.length; i++) {
        $('#display').html("<h3>Author: " + objectToReturn[i][0] + "</h3><h3>Question: " + objectToReturn[i][1] + "</h3><h3>Answer: "+ objectToReturn[i][2] + "</h3>")
      }//end for loop
    };//end display
    var clearInputs = function(){
      //clear input fields
      $('#whoseJoke').val("");
      $('#jokeQuestion').val("");
      $('#punchLine').val("");
    };//end clear
    //ajax call to /joke route
    $.ajax({
      type: 'POST',
      url: '/joke',
      data: sendObject,
      success: function(data){
        console.log('in success');
        displayJokes();
        clearInputs();

      }//end success
    });//end ajax
  });//end on click
});//end doc ready
