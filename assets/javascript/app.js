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

		//when the time runs out displays the results page with updated html to reflect user results(will repeat this code 5 times for each radio group)


	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var totalQuestions = 6;
	

	//question 1 result

	for(var i=1; i<totalQuestions; i++){

	if(eval("q"+i)==null || eval("q"+i)==""){
		unanswered++;
		newUnanswered= $(".neither");
		newUnanswered.html(unanswered);
		
	}
	
	}

	var answers = ["option3","option2","option1","option2","option3"];
	//Question 1
	if(q1==answers[0]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q1==answers[1] || q1==answers[2] || q1==answers[3] || q1==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}

	//Question2	
	if(q2==answers[1]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q2==answers[0] || q2==answers[2] || q2==answers[3] || q2==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//Question3
	if(q3==answers[2]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q3==answers[0] || q3==answers[1] || q3==answers[3] || q3==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//question 4
	if(q4==answers[3]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q4==answers[0] || q4==answers[1] || q4==answers[2] || q4==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//question 5
	if(q5==answers[4]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q5==answers[0] || q5==answers[1] || q5==answers[2] || q5==answers[3]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}


	}
		$(".liveTime").html(count);
	}

	


});

//done button finishs quiz and displays results
$(".doneButton").on("click",function finish(){

	$(".quizContent").hide();
	$(".results").show();

	//when the done button is clicked reveals the results with updated html(will repeat this 5 code times for each radio button group)
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var totalQuestions = 6;
	

	//question 1 result

	for(var i=1; i<totalQuestions; i++){

	if(eval("q"+i)==null || eval("q"+i)==""){
		unanswered++;
		newUnanswered= $(".neither");
		newUnanswered.html(unanswered);
		
	}
	
	}

	var answers = ["option3","option2","option1","option2","option3"];
	//Question 1
	if(q1==answers[0]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q1==answers[1] || q1==answers[2] || q1==answers[3] || q1==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}

	//Question2	
	if(q2==answers[1]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q2==answers[0] || q2==answers[2] || q2==answers[3] || q2==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//Question3
	if(q3==answers[2]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q3==answers[0] || q3==answers[1] || q3==answers[3] || q3==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//question 4
	if(q4==answers[3]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q4==answers[0] || q4==answers[1] || q4==answers[2] || q4==answers[4]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
	//question 5
	if(q5==answers[4]){
		correctAnswers++;
		newCorrect= $(".right");
		newCorrect.html(correctAnswers);
	}else if(q5==answers[0] || q5==answers[1] || q5==answers[2] || q5==answers[3]){
		incorrectAnswers++;
		newIncorrect= $(".wrong");
		newIncorrect.html(incorrectAnswers);
	}
})


});