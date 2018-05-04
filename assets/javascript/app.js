$(document).ready(function() {



$("#startButton").on ("click", function startTrivia() {
    $(this).hide();
    $(".questionPage").show();
    $("#restartButton").hide();
    showQuestion();
    startTimer();
});

var correct = 0;
var wrong = 0;
var unanswer = 0;
var interval;
var timer = 30;


function twoSecond(){
    console.log(i);
    if (i == 3) {
        restart();
        $(".result").empty();
        $(".answer").empty();
        $("#restartButton").show();
    }
    else {
    startTimer();   
    showQuestion();
    $(".result").empty();
    $(".answer").empty();
    }
}

var q1 = {
	question : 'Who was the host for Kitchen Kabaret?',
	possibleAnswers : ['A. Fud Wrapper',
				 'B. Cookie Ann Milk',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
    answer_id: 'opt3',
    answer: 'C. Bonnie Appetit'
};

var q2 = {
	question : 'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?',
	possibleAnswers : ['A. Recycling used film footage',
				  'B. Designing US Army & US Navy insignia',
				  'C. Hosted a Studio Victory Garden where employees grew food for their families',
				  'D. Forced employees to carpool by closing parking lots to non-carpool cars'],
    answer_id: 'opt2',
	answer : 'B. Designing US Army & US Navy insignia'
}

var q3 = {
	question: 'Who starred in the title role of Condorman?',
	possibleAnswers: ['A. Zac Efron',
				 'B. Michael Crawford',
				 'C. Billy Crystal',
				 'D. Michael Keaton'],
    answer_id: 'opt2',
	answer : 'B. Michael Crawford'
};


var i = 0;
var ans_id = ['opt3', 'opt2','opt2'];
var ans = ['C. Bonnie Appetit', 'B. Designing US Army & US Navy insignia','B. Michael Crawford'];
var questionArr = [q1,q2,q3];

function showQuestion(){
    $(".text").append("<h3>" + questionArr[i].question + "</h3>");
    $(".answerChoice").html("");
    $("#opt1").append(questionArr[i].possibleAnswers[0]);
    $("#opt2").append(questionArr[i].possibleAnswers[1]);
    $("#opt3").append(questionArr[i].possibleAnswers[2]);
    $("#opt4").append(questionArr[i].possibleAnswers[3]);
}


function startTimer(){

    $(".timer").html('<h2>Time Remaining: ' + timer + ' seconds</h2>');
    interval = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timer").html('<h2>Time Remaining: ' + timer + ' seconds</h2>');
    if (timer == 0) {
      stop();
      $(".result").append("Time's Up. The correct answer is " + q1.answer);
    }
  }

function stop() {
    clearInterval(interval);
}



$(".answerChoice").on ("click", function(){
    var input = $(this).attr("id");
    
    if(input == ans_id[i]){
        $(".result").append("Correct Answer");
        $(".answer").append(ans[i]);
        correct++;
        console.log("correct: " + correct);
        stop();
        reset();
    }    

    else if (timer == 0) {
        $(".result").append("you are wrong");
        $(".answer").append(ans[i]);
        unanswer++;
        console.log("unanswer: " + unanswer);
        reset();
    }
    else {
        $(".result").append("you are wrong");
        $(".answer").append(ans[i]);
        wrong++;
        console.log("wrong: " + wrong);
        stop();
        reset();
    }
    i ++ ;
    setTimeout(twoSecond, 1000 * 2);
}); 

function reset(){
    timer = 30;
    $(".text").empty();
    $(".answerChoice").html("");
    $("#opt1").empty();
    $("#opt2").empty();
    $("#opt3").empty();
    $("#opt4").empty();
    
}


function restart(){
    console.log('????????????????????????');
    $(".correct").append("correct: " + correct);
    $(".wrong").append("wrong: " + wrong);
    $(".unanswer").append("unanswer: " + unanswer);
}

$("#restartButton").on("click", function(){
    $(this).hide();
    i = 0;
    correct = 0;
    wrong = 0;
    unanswer = 0;
    $(".questionPage").show();
    showQuestion();
    startTimer();
    $(".correct").empty();
    $(".wrong").empty();
    $(".unanswer").empty();
});

});