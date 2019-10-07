    //quiz questions, options, correct responses
let LIST = [
    {
        question: 'What is a "Cria"?',
        answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
        correctAnswer: 'Baby Alpaca',
        explanation: 'Latin.'
    },
    {
        question: 'What is question 2?',
        answers: ['ewf', 'ewg', 'fwef','wefew'],
        correctAnswer: 'ewg',
        explanation: 'Randomly true'
    }
]

let totalScore = 0;
let questionCount = 1;
let i=0;



    //correct answers
let correctAnswers = Object.values(LIST[i]);

    //explanation
let answerExplanation = Object.values(LIST[i]);

function questionChange() {
  if (i < Object.values(LIST).length) {
    let questionText = Object.values(LIST[i]);
    $('.displayQuestion').text(questionText[0]);
    let questionAllAnswers = Object.values(LIST[i]);
    let questionAnswers = questionAllAnswers[1];
    $('#label0').text(questionAnswers[0]);
    $('#label1').text(questionAnswers[1]);
    $('#label2').text(questionAnswers[2]);
    $('#label3').text(questionAnswers[3])
    i++;
    console.log(i)
  } else {
    console.log('end')
  }
}

//clicking start

function clickStart() {
    $('.start').on('click', function() {
        $('.start').hide();
        $('.stats').show();
        questionChange();
        $('.question').show();
        $('.questionAnnouncement').text("Question: " + questionCount + "/10").show();
    });
};

//click submit

function validateForm() {
        var radioButtons = document.getElementsByName('selection')
        var checkFound = false;
        for (var j=0; j < 4; j++) {
           if (radioButtons[j].checked == true) {
              checkFound = true;
              progressQuestion();
              }
           }
        if (checkFound != true) {
           alert ("Please check at least one checkbox.");
           return
        }
      }


function clickSubmit() {
    $('.submit').on('click', function() {
        event.preventDefault();
        validateForm();
    });
};

function progressQuestion() {
  $('.question').hide();
  $('.next').show();
  $('.results').show();
  $('.explanation').show();
  console.log(answerExplanation[3])
}

//click next

function clickNext() {
    $('.next').on('click', function() {
        $('.next').hide();
        $('.stats').show();
        $('.question').show();
        $('.next').hide();
        $('.results').hide();
        questionCount ++;
        questionChange();;
        $('.questionAnnouncement').text("Question: " + questionCount + "/10").show()
    });
}

//click restart

function clickRestart() {
    $('.restart').on('click', function() {
            $('.next').hide();
            $('.start').show();
            $('.restart').hide()
        });
    }

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
