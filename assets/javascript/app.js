$(document).ready(function(){

//hides the quiz content when the webpage loads
$(".quizContent").hide();
$(".results").hide();

//Button that starts the quiz
$(".startButton").on("click", function(){

	//reveals the quiz when the user clicks start and hides the start button after click
	$(".quizContent").show();
	$(".startButton").hide();
});

//done button finishs quiz and displays results
$(".doneButton").on("click",function(){

	$(".quizContent").hide();
	$(".results").show();

})


});