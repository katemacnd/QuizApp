/*jshint esversion: 6 */

let LIST = [
  {
    question: 'What is a "Cria"?',
    answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
    correctAnswer: 'Baby Alpaca',
    explanation: 'Cria is pronounced /kriː.ə/'
  },
  {
    question: "What's the alpaca mating call?",
    answers: ['Orgling', 'Gurgling', 'Yodling','Humming'],
    correctAnswer: 'Orgling',
    explanation: 'When the male alpaca begins orgling, it causes the female alpaca to ovulate'
  },
  {
    question: 'Which family do alpacas belong to?',
    answers: ['Camelidae', 'Carnivora', 'Mustelidae','Usidae'],
    correctAnswer: 'Camelidae',
    explanation: 'Camelids are a group of even-toed ungulate mammals. There are six living species of camelids.'
  },
  {
    question: 'Who domesticated alpacas ~6,000 years ago?',
    answers: ['Incas', 'Mayas', 'Tibetans','Native Hawaiians'],
    correctAnswer: 'Incas',
    explanation: 'The Incas in the Puna region of the Peruvian Andes'
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
        <div class='score'></div>
        <div class='questionAnnouncement'></div>
      `).show();
      $('.question').show();
      $('.submit').show();
      questionChange();
      $('.questionAnnouncement').text("Question: " + questionCount + "/4").show();
      $('.totalScore').show();
      $('.score').text("Total Score: 0").show();
  });
}

function questionChange() {
  if (i < Object.values(LIST).length) {
    let questionText = Object.values(LIST[i]);
    let questionAllAnswers = Object.values(LIST[i]);
    let questionAnswers = questionAllAnswers[1];
    $('.displayQuestion').text(questionText[0]);
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
  let answerExplanations = Object.values(LIST[questionCount - 1]);
  let answerExplanation = answerExplanations[3];
  let correctAnswers = Object.values(LIST[questionCount - 1]);
  let correctAnswer = correctAnswers[2];
  gradeAnswer();
  $('#quiz').hide();
  $('.submit').hide();
  $('.next').show();
  $('.results').show();
  $('.explanationSmall').text("Answer was: " + correctAnswer);
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
    $('.result').text("Correct!");
  } else {
    correctStatus = false;
    $('.result').text("Incorrect!");
  }
  return $('.score').text("Total Score: " + (0+totalScore));
}

//click next
function clickNext() {
  $('.next').on('click', function() {
    uncheckAll();
    $('.next').hide();
    $('#quiz').show();
    $('.submit').show();
    $('.next').hide();
    $('.results').hide();
      $('.correct').hide();
      $('.incorrect').hide();
    questionCount ++;
    questionChange();
    $('.questionAnnouncement').text("Question: " + questionCount + "/4").show();
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
  $('#quiz').hide();
  $('.restart').show();
  $('.submit').hide();
  $('.stats').hide();
}

//click restart
function clickRestart() {
  $('.restart').on('click', function() {
      $('.next').hide();
      $('.start').show();
      $('.restart').hide();
      $('.stats').hide();
      questionCount = 1;
      totalScore = 0;
      i = 0;
  });
}

clickStart();
clickSubmit();
clickNext();
clickRestart();
