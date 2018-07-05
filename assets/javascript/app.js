
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

    // IF USER RUNS OUT OF TIME WITHOUT ANSWERING

    function outOfTime() {

        if (timer === 0) {
            $("#gameWindow").html("<p>Out of time!</p>");
            incorrectAnswers++;
            var correctAnswer = questions[questionCounter].correctAnswer;
            $("#gameWindow").append("<p>The correct answer was <span class='answer'>" +
                correctAnswer +
                "</span></p>" + "<p> Next question.</p>");
            $("#gameWindowImage").append(questions[questionCounter].image);
            setTimeout(nextQuestion, 4000);
            questionCounter++;
        }
    }

    // TIMER FUNCTION:

    function countDownTimer() {
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
    } // End of timer function
    

// NEXT QUESTION FUNCTION:

    function nextQuestion() {
		if (questionCounter < questions.length) {
			timer = 20;
			$("#gameWindow").html("<p>You have <span id='timer'>" + timer + "</span> seconds to answer.</p>");
			questionContent();
			countDownTimer();
			outOfTime();
		}
		else {
			resultsScreen();
		}
	}

// FINAL ANSWER RESULTS

    function resultsScreen() {
		if (correctAnswers === questions.length) {
			var endPrompt = "100%! You've done your Biology homework!";
		}
		else if (correctAnswers > incorrectAnswers) {
			var endPrompt = "Good work! Check out your final score.";
		}
		else {
			var endPrompt = "You... Must have taken some sort of Biology class... Did you not? Wow... If not, you might be retarded.";
		}
		$("#gameWindow").html("<p>" + endPrompt + "</p>" + "<p>You got <strong>" + 
			correctAnswers + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectAnswers + "</strong> wrong.</p>");
		$("#gameWindow").append("<h1 id='start'>Try again?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}








}); // END OF DOCUMENT READY FUNCTION
