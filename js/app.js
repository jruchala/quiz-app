$('#start').on('click', function() {
  console.log("start button functions");
  $('.headline').hide();
  $('#instructions').hide();
  $('#start').hide();
  q1Appear();



});

// global variables
var questionNumber = 0;
var score = 0;

$(".answer").on('click', function() {
  console.dir(this);
  $('.answer').removeClass('selectedAnswer');
  $(this).addClass('selectedAnswer');
});

function clearScreen() {
  $('#questions').css({'opacity': '0'});
  $('.answers').hide();
  $('#submitButton').hide();
  $('#progress').hide();
}

function q1Appear() {
  $('#questions').show();
  $('#firstQuestion').show();
  $('#progress').show();
  $('#glass1').show();
  $('#q1').show();
  $('#submitButton').show();
  questionNumber ++;
}

function q1Clear(){
  $('#questions').hide();
  $('#firstQuestion').hide();
  $('#q1').hide();
  $('.answer').removeClass('selectedAnswer');
}

function q2Appear(){
  $('#questions').show();
  $('#secondQuestion').show();
  $('#progress').show();
  $('#glass2').show();
  $('#q2').show();
  $('#submitButton').show();
  questionNumber ++;
}

function q2Clear(){
  $('#questions').hide();
  $('#secondQuestion').hide();
  $('#q2').hide();
  $('.answer').removeClass('selectedAnswer');
}

function q3Appear(){
  $('#questions').show();
  $('#thirdQuestion').show();
  $('#progress').show();
  $('#glass3').show();
  $('#q3').show();
  $('#submitButton').show();
  questionNumber ++;
}

function q3Clear(){
  $('#questions').hide();
  $('#thirdQuestion').hide();
  $('#q3').hide();
  $('.answer').removeClass('selectedAnswer');
}

function q4Appear(){
  $('#questions').show();
  $('#fourthQuestion').show();
  $('#progress').show();
  $('#glass4').show();
  $('#q4').show();
  $('#submitButton').show();
  questionNumber ++;
}

function q4Clear(){
  $('#questions').hide();
  $('#fourthQuestion').hide();
  $('#q4').hide();
  $('.answer').removeClass('selectedAnswer');
}

function q5Appear(){
  $('#questions').show();
  $('#fifthQuestion').show();
  $('#progress').show();
  $('#glass5').show();
  $('#q5').show();
  $('#submitButton').show();
  questionNumber ++;
}

function q5Clear(){
  $('#questions').hide();
  $('#fifthQuestion').hide();
  $('#q5').hide();
  $('.answer').removeClass('selectedAnswer');
}

function checkAnswer(question, answer) {
  if (question == "1" && answer == "Cabernet Sauvignon"){
    q1Clear();
    score ++;
    $('#correct').css({'display':'inline-block'});
  }
  else if (question == "1" && answer != "Cabernet Sauvignon"){
    q1Clear();
    $('#incorrect').css({'display':'inline-block'});
  }
  else if (question == "2" && answer == "Sangiovese"){
    q2Clear();
    score ++;
    $('#correct').css({'display':'inline-block'});
  }
  else if (question == "2" && answer != "Sangiovese"){
    q2Clear();
    $('#incorrect').css({'display':'inline-block'}); 
  }
  else if (question == "3" && answer == "Spain"){
    q3Clear();
    score ++;
    $('#correct').css({'display':'inline-block'});
  }
  else if (question == "3" && answer != "Spain"){
    q3Clear();
    $('#incorrect').css({'display':'inline-block'}); 
  }
  else if (question == "4" && answer == "Croatia"){
    q4Clear();
    score ++;
    $('#correct').css({'display':'inline-block'});
  }
  else if (question == "4" && answer != "Croatia"){
    q4Clear();
    $('#incorrect').css({'display':'inline-block'}); 
  }
  else if (question == "5" && answer == "Italy"){
    q5Clear();
    score ++;
    $('#correct').css({'display':'inline-block'});
  }
  else if (question == "5" && answer != "Italy"){
    q5Clear();
    $('#incorrect').css({'display':'inline-block'}); 
  }


  else {}

};

$('#submitButton').on('click', function() {
  console.log("submit");
  $(this).css({'background-color':'#445155'});
  console.dir($('.selectedAnswer')[0]);
 // var questionNumber = $('.selectedAnswer')[0].parentElement.id;
  var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");

  checkAnswer(questionNumber, questionAnswer);

  });

$(".continue").click(function(){
  $('#incorrect').css({'display':'none'});
  $('#correct').css({'display':'none'});

  var progressPercent = ((5 - ($('.unAnswered').length))/5) * 100;
  var progressUpdate = "<br>" + progressPercent + "% Complete";
  var goodbyeMessage = "You got " + (5 - $('.wrongAnswer').length) + " out of 5 quesitons right."

  $('#progressUpdate').empty().append(progressUpdate);

  if (questionNumber == 1) {
    q1Clear();
    q2Appear();

  }

  else if (questionNumber == 2){
    q2Clear();
    q3Appear();
  }

  else if (questionNumber == 3){
    q3Clear();
    q4Appear();
  }

  else if (questionNumber == 4){
    q4Clear();
    q5Appear();
  }

  else {
    $('#endPage').css({'display':'block'});
  }

});

function reloadPage(){
  location.reload();
};





