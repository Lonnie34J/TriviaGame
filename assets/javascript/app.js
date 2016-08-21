$(document).ready(function(){

	//sets the elements on the results page to zero instead of just blank
	correctAnswers=0;
	newCorrect= $(".right");
	newCorrect.html(correctAnswers);
	
	incorrectAnswers=0;
	newIncorrect= $(".wrong");
	newIncorrect.html(incorrectAnswers);

	unanswered=0
	newUnanswered= $(".neither");
	newUnanswered.html(unanswered);

//hides the quiz content when the webpage loads
$(".quizContent").hide();
$(".results").hide();

//Button that starts the quiz
$(".startButton").on("click", function(){

	//reveals the quiz when the user clicks start and hides the start button after click
	$(".quizContent").show();
	$(".startButton").hide();

	//sets the count for the timer
	count = 200;
	counter = setInterval(gameTimer, 200);

	//runs the timer
	function gameTimer(){

		count -= 1;
		if(count ==0){

		$(".quizContent").hide();
		$(".results").show();

		//when the time runs out displays the results page with updated html to reflect user results(will epeat this code 5 times for each radio group)

	}
		$(".liveTime").html(count);
	}

	


});

//done button finishs quiz and displays results
$(".doneButton").on("click",function(){

	$(".quizContent").hide();
	$(".results").show();

	//when the done button is clicked reveals the results with updated html(will repeat this 5 code times for each radio button group)
	var answer= document.getElementById('optionsRadios3');

	var answerOne= document.getElementById("optionsRadios2").checked;

	var answerTwo= document.getElementById("optionsRadios4").checked;

		if(answer.checked===true) {
			
			correctAnswers++;
			newCorrect= $(".right");
			newCorrect.html(correctAnswers);
		}else if(answer.checked===false){
			unanswered++;
			newUnanswered= $(".neither");
			newUnanswered.html(unanswered);
		}if(answer.checked==answerOne){
			incorrectAnswers++
			newIncorrect= $(".wrong");
			newIncorrect.html(incorrectAnswers);
		}


		
})


});