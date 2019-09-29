//quiz questions, options, correct responses

let LIST = [
    {
        question: 'What is a "Cria"?"',
        answers: ['Baby Alpaca', 'Cream-Colored Alpaca', 'Specific Breed of Alpaca','An Alpaca Halter'],
        correctAnswer: 'Baby Alpaca',
        explanation: 'Latin.'
    }
]
    //setting up scoring
    //clicking start

    function clickStart() {
        $('.start').on('click', function() {
            $('.start').hide();
            // $('.question').show();
            $('.stats').show();
            $('.choiceDisplay').empty();
            });
    };

    //populating the choices

    function quizQuestions() {
        console.log('populating quiz questions')
        $(".choiceDisplay").show();
            console.log($('.choiceDisplay'));
          $(".choiceDisplay").append('hello!');
            console.log($('.choiceDispay'));
            `<form>
              <label>
                <input type="radio" value="${LIST[0[0]]}" name="answers" required>${LIST[0[0]]}</input><br></br>
              </label>

              <button type="submit" class="submitButton">Submit Answer</button>
          </form>`
      }

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
    // var quiz = new Quiz(questions);

    clickStart();

