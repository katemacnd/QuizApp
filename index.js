/*jshint esversion: 6 */

let LIST = [
  {
    question: 'What is a "Cria"?',
    answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
    correctAnswer: 'Baby Alpaca',
    explanation: 'Latin.'
  },
  {
    question: 'What do you call the mating calls of the alpaca?',
    answers: ['Orgling', 'Gurgling', 'Yodling','Humming'],
    correctAnswer: 'Orgling',
    explanation: 'Yep it is disgusting, too'
  },
  {
    question: 'How many toes do alpacas have on each foot?',
    answers: ['None - They are Hooves', '5 in Front, 4 in Back', '3 in Front, 2 in Back','2'],
    correctAnswer: '2',
    explanation: 'Two - It is true!'
  },
  {
    question: 'Which family do alpacas belong to?',
    answers: ['Camelidae', 'Carnivora', 'Mustelidae','Usidae'],
    correctAnswer: 'Camelidae',
    explanation: 'They are directly related to camels'
  },
  {
    question: 'Who originally domesticated alpacas roughly 6,000 years ago?',
    answers: ['Incas', 'Mayas', 'Tibetans','Native Hawaiians'],
    correctAnswer: 'Incas',
    explanation: 'Peruvians are awesome'
  }
];
let questionCount = 1;
let i = 0;
let radioButtons = document.getElementsByName('selection');
let correctAnswers = Object.values(LIST[i]);
let correctAnswer = correctAnswers[2];
let totalScore = 0;
let correctStatus = false;

//clicking start

function clickStart() {
  $('.start').on('click', function() {
      $('.start').hide();
      $('.stats').html(`
        <div class = 'score'></div>
        <div class = 'questionAnnouncement hidden'></div>
      `);
      $('.stats').show();
      $('.question').show();
      questionChange();
      $('.questionAnnouncement').text("Question: " + questionCount + "/6").show();
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
  });
}
//make sure one radio option is checked
function validateForm() {
  var checkFound = false;
  for (var j = 0; j < 4; j++) {
     if (radioButtons[j].checked == true) {
        checkFound = true;
        progressQuestion();
        }
     }
  if (checkFound != true) {
     alert ('Please check your answer.');
     return;
  }
}

//screen with "next" option and display correct/incorrect
function progressQuestion() {
  gradeAnswer();
  $('.question').hide();
  $('.next').show();
  $('.results').show();
  let answerExplanations = Object.values(LIST[questionCount - 1]);
  let answerExplanation = answerExplanations[3];
  $('.explanation').text(answerExplanation);
  $('.explanation').show();
}

//score correct/incorrect
function gradeAnswer() {
  let userAnswer = $("input[name='selection']:checked").val();
  let correctAnswers = Object.values(LIST[questionCount - 1]);
  let correctAnswer = correctAnswers[2];
  if (userAnswer === correctAnswer) {
    totalScore ++;
    correctStatus = true;
    $('.correct').show();
    $('.result').text("Correct!");
  } else {
    correctStatus = false;
    $('.incorrect').show();
    $('.result').text("Incorrect!");
  }
  return $('.score').text("Total Score: " + (0+totalScore));
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
      $('.correct').hide();
      $('.incorrect').hide();
    questionCount ++;
    questionChange();
    $('.questionAnnouncement').text("Question: " + questionCount + "/10").show();
  });
}

// uncheck all radio buttons to start next question
function uncheckAll() {
for (k = 0;k < radioButtons.length; k++) {
    if (radioButtons[k].type == 'radio') {
      radioButtons[k].checked = false;
  }}
}

// restart page
function finalPage() {
  $('.question').hide();
  $('.restart').show();
}

//click restart
function clickRestart() {
  $('.restart').on('click', function() {
      $('.next').hide();
      $('.start').show();
      $('.restart').hide();
      questionCount = 1;
      totalScore = 0;
      i = 0;
  });
}

clickStart();
clickSubmit();
clickNext();
clickRestart();
