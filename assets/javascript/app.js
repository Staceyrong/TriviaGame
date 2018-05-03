$(document).ready(function() {



$("#startButton").on ("click", function startTrivia() {
    $(this).hide();
    $(".questionPage").show();
    showQuestion();
    startTimer();
});

var correct = 0;
var wrong = 0;
var unanswer = 0;
var interval;
var timer = 30;

var q1 = {
	question : 'Who was the host for Kitchen Kabaret?',
	possibleAnswers : ['A. Fud Wrapper',
				 'B. Cookie Ann Milk',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
	answer : 'C. Bonnie Appetit'
};

function showQuestion(){
    $(".text").append("<h3>" + q1.question + "</h3>");
    $(".answerChoice").html("");
    for (var i = 0; i < q1.possibleAnswers.length; i++) {
        var ans = q1.possibleAnswers[i];
        var id = i + 1;
        var first = '<h6 id="'+id+'">'
        var last = "</h6>"
        $(".answerChoice").append(first+ans+last);
    }
    
}


function startTimer(){

    $(".timer").html('<h2>Time Remaining: ' + timer + ' seconds</h2>');
    interval = setInterval(decrement, 1000);
}

function decrement() {

    timer--;
    $(".timer").html('<h2>Time Remaining: ' + timer + ' seconds</h2>');
    if (timer === 0) {
      stop();
      $(".result").append("Time's Up. The correct answer is " + "A");
    }
  }

function stop() {
    clearInterval(interval);
}

$(".answerChoice").on ("click", function(){
    

    if(this.id === q1.answer){
        alert("Yes");
        console.log("yes");
        stop();
    }
    else {
        $(".result").append("you are wrong");
        stop();
    }
}); 



});