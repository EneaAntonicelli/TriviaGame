
// GLOBAL VARIABLES:

var questionCounter = 0;
var timer = 15;
var correctAnswers = 0;
var incorrectAnswers = 0;


// VIDEO CODE:

//GET THE VIDEO

var video = document.getElementById("myVideo");

// GET THE BUTTON

var btn = document.getElementById("myBtn");

// PAUSE AND PLAY THE VIDEO + CHANGE BUTTON TEXT

$(document).ready(function () {

    $('#myBtn').click(function () {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
    }); // END OF #myBtn FUNCTION CALL



    // GAME FUNCTIONS:

    // INITIALIZE GAME

    $("#gameWindow").hide();
    $("#gameWindowImage").hide();
    function startGame() {

        $("#gameWindow").html("<p>You have <span id='timer'>" + timer + "</span> seconds left!</p>");
        timer();
        questionContent();
        outOfTime();

    } // End of startGame function

    $("#start").click(function () {
        $("#gameWindow").show();
        $("#gameWindowImage").show();
        nextQuestion();
        $(this).hide();
    });

    $("#gameWindow").on("click", ".choices", (function () {

        var Guess = $(this).text();

        if (Guess === questions[questionCounter].answer) {
            clearInterval(clock);
            correctGuess();

        } // end of if

        else {
            clearInterval(clock);
            incorrectGuess();

        } // End of else

    })); // End of on "Click" function



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
    } // End of questionContent function

    // IF ANSWER IS CORRECT

    function correctGuess() {

        $("#gameWindow").html("<p>Well done! </p>");
        correctAnswers++;
        var correctAnswer = questions[questionCounter].answer;
        $("#gameWindow").append("<p>The answer was <span class='answer'>" +
            correctAnswer +
            "</span></p>" + "<p> Next question.</p>");
        $("#gameWindowImage").html(questions[questionCounter].image);
        setTimeout(nextQuestion, 5000);
        questionCounter++;

    } // End of correctGuess function

    // IF ANSWER IS INCORRECT

    function incorrectGuess() {

        $("#gameWindow").html("<p>Incorrect.</p>");
        incorrectAnswers++;
        var correctAnswer = questions[questionCounter].answer;
        $("#gameWindow").append("<p>The correct answer was <span class='answer'>" +
            correctAnswer +
            "</span></p>" + "<p> Next question.</p>");
        $("#gameWindowImage").html(questions[questionCounter].image);
        setTimeout(nextQuestion, 5000);
        questionCounter++;

    } // End of incorrectGuess function

    // IF USER RUNS OUT OF TIME WITHOUT ANSWERING

    function outOfTime() {

        if (timer === 0) {

            $("#gameWindow").html("<p>Out of time!</p>");
            incorrectAnswers++;
            var correctAnswer = questions[questionCounter].answer;
            $("#gameWindow").append("<p>The correct answer was <span class='answer'>" +
                correctAnswer +
                "</span></p>" + "<p> Next question.</p>");
            $("#gameWindowImage").html(questions[questionCounter].image);
            setTimeout(nextQuestion, 5000);
            questionCounter++;

        } // End of if 

    } // End of outOfTime function

    // TIMER FUNCTION:

    function countDownTimer() {

        $(".timeLeft").html("TIME LEFT: " + "<strong>" + timer + "</strong>");
        
        clock = setInterval(countDown, 1000);

        function countDown() {

            if (timer < 1) {
                clearInterval(clock);
                outOfTime();
            } // End of first if

            if (timer > 0) {
                timer--;
            } // End of second if

            $(".timeLeft").html("TIME LEFT: " + "<strong>" + timer + "</strong>");

        } // End of countDown function

    } // End of countDowntimer function


    // NEXT QUESTION FUNCTION:

    function nextQuestion() {

        $("#gameWindowImage").empty();

        if (questionCounter < questions.length) {
            timer = 15;
            $("#gameWindow").html("<p>You have <span id='timer'>" + timer + "</span> seconds to answer.</p>");
            questionContent();
            countDownTimer();
            outOfTime();
        } // End of if

        else {
            resultsScreen();

        }// End of else

    } // End of nextQuestion

    // FINAL ANSWER RESULTS

    function resultsScreen() {

        if (correctAnswers === questions.length) {
            var endPrompt = "100%! You've done your Biology homework!";
        } // end of if

        else if (correctAnswers > incorrectAnswers) {
            var endPrompt = "Good work! Check out your final score.";
        } // End of else if 1

        else if (correctAnswers < 2) {
            var endPrompt = "You... must have taken some sort of Biology class at some point in your life... Did you not? I mean... wow... That is embarassing. I'll be honest with you... I'm not even gonna sugar coat it at this point... I mean, to be completely frank... Without holding anything back...  I'm just saying... That was... You know what? Leave. Just leave... I can't even with you right now. Just go. I'm done.";
        } // End of else if 2
        
        else {
            var endPrompt = "Well... You tried.";
        } // End of else

        $("#gameWindow").html("<p>" + endPrompt + "</p>" + "<p>You got <strong>" +
            correctAnswers + "</strong> right.</p>" +
            "<p>You got <strong>" + incorrectAnswers + "</strong> wrong.</p>");
        $("#gameWindow").append("<h1 id='start'>Try again?</h1>");
        gameReset();
        $("#start").click(nextQuestion);

    } // End of resultsScreen function

    // GAME RESET FUNCTION:

    function gameReset() {
        questionCounter = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
    } // End of gameReset


    // INITIATE AUDIO PLAYER AT THE TOP LEFT OF THE SCREEN

    
    
}); // END OF DOCUMENT READY FUNCTION
