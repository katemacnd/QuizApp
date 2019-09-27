//quiz questions, options, correct responses

let questions = [
    {
        question: 'What is a "Cria"?"',
        answers: [
        {choice0: 'Baby Alpaca', correct: true},
        {choice1: 'Cream-Colored Alpaca', correct: false},
        {choice2: 'Specific Breed of Alpaca', correct: false},
        {choice3: 'An Alpaca Halter', correct: false},
        ],
        explanation: 'It is cuz it is.'
    },
    {
        question: 'Which of these is an alpaca?',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        correct: ''
    },
    {
        question: 'What do you call the mating sounds of the alpaca?',
        choiceA: 'Orgling',
        choiceB: 'Gurgling',
        choiceC: 'Yodling',
        choiceD: 'Humming',
        correct: 0
    },
    {
        question: 'How many toes do alpacas have on each foot?',
        choiceA: "None - They're Hooves",
        choiceB: '5 in front, 4 in back',
        choiceC: '3 in front, 2 in back',
        choiceD: '2',
        correct: ''
    },
    {
        question: 'To which family do alpacas belong?',
        choiceA: 'Camelidae',
        choiceB: 'Carnivora',
        choiceC: 'Mustelidae',
        choiceD: 'Ursidae',
        correct: ''
    },
    {
        question: 'Who originally domesticated alpacas roughly 6,000 yers ago?',
        choiceA: 'Incas',
        choiceB: 'Mayas',
        choiceC: 'Tibetans',
        choiceD: 'Native Hawaiians',
        correct: ''
    },
    {
        question: 'What are the benefits of Alpaca fiber?',
        choiceA: 'Water resistance',
        choiceB: 'Flame resistance',
        choiceC: 'Hypoallergenic',
        choiceD: 'All of the above',
        correct: ''
    },
    {
        question: 'How long is the gestation period for an alpaca?',
        choiceA: '5 months',
        choiceB: '9 months',
        choiceC: '11 months',
        choiceD: '18 months',
        correct: ''
    },
    {
        question: "Which is NOT true of alpaca's mouths?",
        choiceA: 'They have teeth that must be trimmed',
        choiceB: 'They use a dental pad to grind soft food against',
        choiceC: 'Only male alpacas grow "fighting teeth"',
        choiceD: 'Their "spit" is stored in special pocets toward the back of their mouths',
        correct: ''
    },
    {
        question: 'What kind of diet does an alpaca have?',
        choiceA: 'Carnivore',
        choiceB: 'Herbivore',
        choiceC: 'Omnivore',
        correct: ''
    }
]

//setting up scoring

    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    Quiz.prototype.getQuestionIndex = function() {
        return this.questions[this.questionIndex];
    }

    Quiz.prototype.guess = function(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
     
        this.questionIndex++;
    }

    Quiz.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
    }


    //clicking start

    function clickStart() {
        $('.start').on('click', function() {
            $('.start').hide();
            $('.question').show();
            $('.stats').show();
            });
    };

    //populating the choices


    function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    Question.prototype.isCorrectAnswer = function(choice) {
        return this.answer === choice;
    }    

    // function populate() {
    //     if(quiz.isEnded()) {
    //         showScores();
    //     }
    //     else {
    //         // show question
    //         // $('.question').show();
    //         // var element = document.querySelector("questions");
    //         // element.innerHTML = quiz.getQuestionIndex().text;
    //         // console.log(element);

    //         // show options
    //         var choices = quiz.getQuestionIndex().choices;
    //         console.log(choices);
    //         // for(var i = 0; i < choices.length; i++) {
    //         //     var element = document.getElementById("choice" + i);
    //         //     element.innerHTML = choices[i];
    //         //     guess("btn" + i, choices[i]);
    //         // }
        
    //         showProgress();
    //     }
    // }

    function guess(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            populate();
        }
    };


    // function showProgress() {
    //     var currentQuestionNumber = quiz.questionIndex + 1;
    //     var element = document.getElementById("progress");
    //     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    // };
     
    // function showScores() {
    //     var gameOverHTML = "<h1>Result</h1>";
    //     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    //     var element = document.getElementById("quiz");
    //     element.innerHTML = gameOverHTML;
    // };


        // clicking an answer
        // clicking submit
        // determine if answer correct/incorrect

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
    var quiz = new Quiz(questions);

    clickStart();
    // populate();
