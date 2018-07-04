
// GLOBAL VARIABLES:

var questionCounter = 0;
var timer = 20;
var correctAnswers = 0;
var incorrectAnswers = 0;


// VIDEO CODE:

//GET THE VIDEO

var video = document.getElementById("myVideo");

// GET THE BUTTON

var btn = document.getElementById("myBtn");

// PAUSE AND PLAY THE VIDEO + CHANGE BUTTON TEXT

$(document).ready(function() {

$('#myBtn').click(function() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}); // END OF #myBtn FUNCTION CALL



// GAME FUNCTIONS:

// GENERATE QUESTION AND CHOICES

function questionContent() {
    
    $("#gameWindow").append("<p>" + 
        questions[questionCounter].question + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[0] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[1] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[2] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[3] + 
        "</p>"); 
    }

// IF ANSWER IS CORRECT

function correctGuess() {

    $("#gameWindow").html("<p>Well done! </p>");
    correctAnswers++;
    var correctAnswer = questions[questionCounter].answer;
    $("#gameWindow").append("<p>The answer was <span class='answer'>" + 
        correctAnswer + 
        "</span></p>" + "<p> Next question.</p>");
        $("#gameWindowImage").append(questions[questionCounter].image);
    setTimeout(nextQuestion, 4000);
    questionCounter++;
}

// IF ANSWER IS INCORRECT

function incorrectGuess() {

    $("#gameWindow").html("<p>Incorrect.</p>");
    incorrectAnswers++;
    var correctAnswer = questions[questionCounter].correctAnswer;
    $("#gameWindow").append("<p>The correct answer was <span class='answer'>" + 
        correctAnswer + 
        "</span></p>" + "<p> Next question.</p>");
        $("#gameWindowImage").append(questions[questionCounter].image);
    setTimeout(nextQuestion, 4000);
    questionCounter++;
}













}); // END OF DOCUMENT READY FUNCTION
