/*jshint esversion: 6 */

let LIST = [
  {
    question: 'What is a "Cria"?',
    answers: ['Baby Alpaca', 'Cream-Tone Alpaca', 'Breed of Alpaca','Alpaca Halter'],
    correctAnswer: 'Baby Alpaca',
    explanation: 'Cria is pronounced /kriː.ə/'
  },
  {
    question: 'Which family do alpacas belong to?',
    answers: ['Mustelidae', 'Carnivora', 'Camelidae','Usidae'],
    correctAnswer: 'Camelidae',
    explanation: 'Camelids are a group of even-toed ungulate mammals. There are six living species of camelids.'
  },
  {
    question: 'Who domesticated alpacas?',
    answers: ['Incas', 'Mayas', 'Tibetans','Native Hawaiians'],
    correctAnswer: 'Incas',
    explanation: 'The Incas in the Puna region of the Peruvian Andes roughly 6,000 years ago.'
  },
  {
    question: 'Which is true of Alpaca Fiber?',
    answers: ['Water Resistant', 'Flame Resistant', 'Hypoallergenic','All of the Above'],
    correctAnswer: 'All of the Above',
    explanation: 'Alpacas are sheered once per year to collect this valuable fiber.'
  },
  {
    question: 'What is their Diet?',
    answers: ['Carnivore', 'Herbivore', 'Omnivore','Insectivore'],
    correctAnswer: 'Herbivore',
    explanation: 'They eat hay, grain, grasses, and other leafy plants.'
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
      $('#quiz').show();
      $('.question').show();
      $('.submit').show();
      $('.questionAnnouncement').text("Question: " + questionCount + "/5").show();
      $('.score').text("Total Score: 0").show();
      questionChange();
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
    $('#btn0').prop('checked', true);
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
      progressQuestion();
  });
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
    $('#quiz').show();
    $('.submit').show();
    $('.next').hide();
    $('.results').hide();
    questionCount ++;
    questionChange();
    $('.questionAnnouncement').text("Question: " + questionCount + "/5").show();
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
  let percentScore = (totalScore/5)*100;
  $('.percentScore').text(`You got ` + totalScore + `/5, which is ` + percentScore + `%!`);
  $('#quiz').hide();
  $('.restart').show();
  $('.submit').hide();
  $('.percentScore').show();
  $('.stats').hide();
}

//click restart
function clickRestart() {
  $('.restart').on('click', function() {
      $('.question').hide();
      $('.start').show();
      $('.restart').hide();
      $('.percentScore').hide();
      questionCount = 1;
      totalScore = 0;
      i = 0;
  });
}

function handleClicks() {
  clickStart();
  clickSubmit();
  clickNext();
  clickRestart();
}

$(handleClicks);
