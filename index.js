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
];

let totalScore = 0;
let questionCount = 1;
let i = 0;
let radioButtons = document.getElementsByName('selection');
let correctAnswers = Object.values(LIST[i]);
let correctAnswer = correctAnswers[2];
let answerExplanation = Object.values(LIST[i]);

// score correct/incorrect
function gradeAnswer() {
  let test = $("input[name='selection']:checked").val();
  console.log(correctAnswer);
  console.log(test);
  // if (answer === correctAnswer) {
  //   totalScore ++;
  // }
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
}

function questionChange() {
  if (i < Object.values(LIST).length) {
    let questionText = Object.values(LIST[i]);
    $('.displayQuestion').text(questionText[0]);
    let questionAllAnswers = Object.values(LIST[i]);
    let questionAnswers = questionAllAnswers[1];
    $('#label0').text(questionAnswers[0]);
    $('#label1').text(questionAnswers[1]);
    $('#label2').text(questionAnswers[2]);
    $('#label3').text(questionAnswers[3]);
    $('#btn0').val(questionAnswers[0]);
    $('#btn1').val(questionAnswers[1]);
    $('#btn2').val(questionAnswers[2]);
    $('#btn3').val(questionAnswers[3]);
    i++;
  } else {
    finalPage();
  }
}

//click submit

function clickSubmit() {
    $('.submit').on('click', function() {
        event.preventDefault();
        validateForm();
        // if validateForm() {
          // if answerCorrect() {
            // progressQuestion()
        //} else {}
          //
      //}
    });
}

function validateForm() {
        var checkFound = false;
        for (var j=0; j < 4; j++) {
           if (radioButtons[j].checked == true) {
              checkFound = true;
              progressQuestion();
              }
           }
        if (checkFound != true) {
           alert ('Please check at least one checkbox.');
           return;
        }
      }

function progressQuestion() {
  gradeAnswer();
  $('.question').hide();
  $('.next').show();
  $('.results').show();
  $('.explanation').show();
}

//click next

function clickNext() {
    $('.next').on('click', function() {
        uncheckAll();
        $('.next').hide();
        $('.stats').show();
        $('.question').show();
        $('.next').hide();
        $('.results').hide();
        questionCount ++;
        questionChange();
        $('.questionAnnouncement').text("Question: " + questionCount + "/10").show();
    });
}

function uncheckAll() {
for (k=0;k<radioButtons.length;k++) {
    if (radioButtons[k].type == 'radio') {
    radioButtons[k].checked = false;
  }}
}

function finalPage() {
    console.log('end');
    $('.question').hide();
    $('.restart').show();
    //restart question counter
    //restart score
}

//click restart

function clickRestart() {
    $('.restart').on('click', function() {
            $('.next').hide();
            $('.start').show();
            $('.restart').hide();
        });
    }

function scoreKeeper(totalScore) {
    totalScore ++;
    return totalScore;
}

clickStart();
clickSubmit();
clickNext();
clickRestart();
scoreKeeper();


// Still Needed //

        // loop updating score
        // display image/result (based on correct/incorrect answer), explanation
        // function determining if correct/incorrect
        // function adding to score if correct
