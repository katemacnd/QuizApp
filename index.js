    //quiz questions, options, correct responses
let LIST = [
    {
        question: 'What is a "Cria"?',
        answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
        correctAnswer: 'Baby Alpaca',
        explanation: 'Latin.'
    }
]

let totalScore = 0;
let questionCount = 1;

//targetting the actual question, answers, correctAnswer, and explanation //
    //question
let questionText = Object.values(LIST[0]);
console.log(questionText);

    //answers
let questionAllAnswers = Object.values(LIST[0]);
let questionAnswers = questionAllAnswers[1];
console.log(questionAnswers);

    //correct answers
let correctAnswers = Object.values(LIST[0]);
console.log(correctAnswers[2]);

    //explanation
let answerExplanation = Object.values(LIST[0]);
console.log(answerExplanation[3]);

$('.displayQuestion').text(questionText[0])
$('#label0').text(questionAnswers[0])
$('#label1').text(questionAnswers[1])
$('#label2').text(questionAnswers[2])
$('#label3').text(questionAnswers[3])

//clicking start

function clickStart() {
    $('.start').on('click', function() {
        $('.start').hide();
        $('.stats').show();
        $('.question').show();
        $('.questionAnnouncement').text("Question: " + questionCount + "/10").show();
    });
};

//click submit

function clickSubmit() {
    $('.submit').on('click', function() {
        event.preventDefault();
        $('.question').hide();
        $('.next').show();
        $('.results').show();
        $('.explanation').show();
        console.log(answerExplanation[3]);
    });
};

//click next

function clickNext() {
    $('.next').on('click', function() {
        $('.next').hide();
        $('.stats').show();
        $('.question').show();
        $('.next').hide();
        $('.results').hide();
        questionCount ++;
        $('.questionAnnouncement').text("Question: " + questionCount + "/10").show()
    });
};

//click restart

function clickRestart() {
    $('.restart').on('click', function() {
            $('.next').hide();
            $('.start').show();
            $('.restart').hide();
        });
    };

// function determining if correct/incorrect
// function adding to score if correct 

function scoreKeeper(totalScore) {        
    totalScore + 1;
    return totalScore
}

    //functions related to quiz final results
        //hide questions, answer options, submit button,
        //display image/result (based on correct/incorrect answer), explanation
        //loop updating score
        //updating question count

    // functions related to quiz questions (con't)
        //update / display stats
        //change questions/answers

    //functions related to quiz end
        //display final score
        //clicking RESTART
        //restarting score & question #s

    // click listeners
        //RESTART


clickStart();
clickSubmit();
clickNext();
clickRestart();
scoreKeeper();