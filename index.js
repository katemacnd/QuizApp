    //quiz questions, options, correct responses
let LIST = [
    {
        question: 'What is a "Cria"?',
        answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
        correctAnswer: 'Baby Alpaca',
        explanation: 'Latin.'
    }
]

//targetting the actual question, answers, correctAnswer, and explanation //

    //question
let questionText = Object.values(LIST[0]);

    //answers
let questionAllAnswers = Object.values(LIST[0]);
let questionAnswers = questionAllAnswers[1];

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
    });
};

//click submit

function clickSubmit() {
    $('.submit').on('click', function() {
        event.preventDefault();
        $('.question').hide();
        $('.next').show();
        $('.results').show();
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
});
};
    //populating the choices

        // clicking an answer
        // clicking submit
        // determine if answer correct/incorrect
        //setting up scoring

    //functions related to quiz results
        //hide questions, answer options, submit button,
        //display image/result (based on correct/incorrect answer), correct answer, NEXT button
        //updating score
        //updating question count
        //clicking NEXT button

    // functions related to quiz questions (con't)
        //update / display stats
        //change questions/answers

    //functions related to quiz end
        //display final score
        //clicking RESTART

    // click listeners
        //START
        //SUBMIT
        //NEXT
        //RESTART
    // var quiz = new Quiz(questions);

clickStart();
clickSubmit();
clickNext();