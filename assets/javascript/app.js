$(document).ready(function() {



$("#startButton").on ("click", function startTrivia() {
    $(this).hide();
    $(".questionPage").show();
    $("#restartButton").hide();
    showQuestion();
    startTimer();
});

// initialize
var correct = 0;
var wrong = 0;
var unanswer = 0;
var interval;
var timer = 20;

// set interval between 2 questions
function twoSecond() {
    console.log(i);
    $(".result").empty();
    $(".answer").empty();
    //if all questions done, click the button to restart
    if (i == 4) {
        restart();
        $("#restartButton").show();
    }
    else {
        startTimer();   
        showQuestion();
        $(".img").empty();
    }
}

// Four questions
var q1 = {
	question : "Who was the host for Kitchen Kabaret?",
	possibleAnswers : ["A. Fud Wrapper",
				    "B. Cookie Ann Milk",
				    "C. Bonnie Appetit",
				    "D. Cherry Ontop"],
    // answer_id: "opt3",
    // answer: "C. Bonnie Appetit"
};

var q2 = {
	question : "Which wartime activity did the Walt Disney Studios partake in to support the American war effort?",
	possibleAnswers : ["A. Recycling used film footage",
				  "B. Designing US Army & US Navy insignia",
				  "C. Hosted a Studio Victory Garden where employees grew food for their families",
				  "D. Forced employees to carpool by closing parking lots to non-carpool cars"],
    // answer_id: "opt2",
	// answer : "B. Designing US Army & US Navy insignia"
}

var q3 = {
	question: "Who starred in the title role of Condorman?",
	possibleAnswers: ["A. Zac Efron",
				 "B. Michael Crawford",
				 "C. Billy Crystal",
				 "D. Michael Keaton"],
    // answer_id: "opt2",
	// answer : "B. Michael Crawford"
};

var q4 = {
	question: "Hawaiian Punch was originally developed in 1934 as a tropical-flavored_____?",
	possibleAnswers: ["A. Ice Cream Topping",
				 "B. Sun Tan Lotion",
				 "C. Sugar Substituite",
				 "D. Dog Treat"],
    // answer_id: "opt1",
	// answer : "A. Ice Cream Topping"
};


// initialize
var i = 0;
var ans_id = ["opt3", "opt2","opt2","opt1"];
var ans = ["C. Bonnie Appetit", "B. Designing US Army & US Navy insignia","B. Michael Crawford","A. Ice Cream Topping"];
var questionArr = [q1,q2,q3,q4];
var images = ["https://i.ytimg.com/vi/UxbnsxYZNeM/hqdefault.jpg",
             "http://www.diggerhistory.info/images/badges-asstd2/us-insignia.jpg",
             "https://i.pinimg.com/originals/28/f2/e2/28f2e2759a0b4d87790ef93baa591732.jpg",
             "https://www.drpeppersnapplegroup.com/smedia/images/201610201427img-hawaiian-punch-group-shot_110345799129.png"]

//Click the button to start the question page
function showQuestion() {
    $(".text").append("<h3>" + questionArr[i].question + "</h3>");
    $(".answerChoice").html("");
    $("#opt1").append(questionArr[i].possibleAnswers[0]);
    $("#opt2").append(questionArr[i].possibleAnswers[1]);
    $("#opt3").append(questionArr[i].possibleAnswers[2]);
    $("#opt4").append(questionArr[i].possibleAnswers[3]);
}


//set the timer
function startTimer(){ 

    $(".timer").html("<h2>Time Remaining: " + timer + "seconds</h2>");
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

// options click
$(".answerChoice").on ("click", function() {
    var input = $(this).attr("id");
    
    if(input == ans_id[i]){
        $(".result").append("Awsome! You are right!");
        $(".answer").append(ans[i]);
        $(".img").html("<img src=" + images[i] + " width='400px'>");
        correct++;
        console.log("correct: " + correct);
        stop();
        reset();
    }    

    else if (timer == 0) {
        $(".result").append("Sorry! Time's Up! The right one is: ");
        $(".answer").append(ans[i]);
        $(".img").html("<img src=" + images[i] + " width='400px'>");
        unanswer++;
        console.log("unanswer: " + unanswer);
        reset();
    }
    else {
        $(".result").append("Oh~ Your answer is wrong. The right one is: ");
        $(".answer").append(ans[i]);
        $(".img").html("<img src=" + images[i] + " width='400px'>");
        wrong++;
        console.log("wrong: " + wrong);
        stop();
        reset();
    }
    i ++ ;
    setTimeout(twoSecond, 1000 * 2);
}); 

function reset() {
    timer = 20;
    $(".text").empty();
    $(".answerChoice").html("");
    $("#opt1").empty();
    $("#opt2").empty();
    $("#opt3").empty();
    $("#opt4").empty();
    
}

function restart() { 
    $(".correct").append("correct: " + correct);
    $(".wrong").append("wrong: " + wrong);
    $(".unanswer").append("unanswer: " + unanswer);
}

$("#restartButton").on("click", function() {
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