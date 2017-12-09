$(document).ready(function () {
    // Initialze
    var Message = ['Time up', 'Nope', 'Correct'];
    var Correct = '0';
    var Incorrect = '0';
    var Unanswered = '0';
    var GameTime = '30000';
    var TimeUp = '5000';
    var Timer = 30;
    var intervalId;
    var Questions = [{ Question: 'Say what 1?', Answer: 'Yo mama1', Options: ['Yo mama1', 'Yo mama2', 'Yo mama3', 'Yo mama4'], Image: './assets/images/question1.png' },
    { Question: 'Say what 2?', Answer: 'Yo mama2', Options: ['Yo mama1', 'Yo mama2', 'Yo mama3', 'Yo mama4'], Image: './assets/images/question2.png' },
    { Question: 'Say what 3?', Answer: 'Yo mama3', Options: ['Yo mama1', 'Yo mama2', 'Yo mama3', 'Yo mama4'], Image: './assets/images/question3.png' },
    { Question: 'Say what 4?', Answer: 'Yo mama4', Options: ['Yo mama1', 'Yo mama2', 'Yo mama3', 'Yo mama4'], Image: './assets/images/question4.png' },
    { Question: 'Say what 5?', Answer: 'Yo mama5', Options: ['Yo mama1', 'Yo mama2', 'Yo mama3', 'Yo mama4'], Image: './assets/images/question5.png' },];

    $('.game-window').hide();

    // start game click event  
    $('#start-game').on('click', function () {
        StartGame();
    });


    function StartGame() {
        $('.start-game-window').hide('slow');
        $('.game-window').show('slow');
        var Question;
        //var RandomQuestionObj = GetRandonQuestion();
        for (var i = 0; i < Questions.length; i++) {
            Question = $('<div class="question">' + Questions[i].Question + '</div>');

            // var OptionNumber = returnRandomNumber(Questions[i].Options.length);
            var ul = document.createElement('ul');
            for (var j = 0; j < Questions[i].Options.length; j++) {
                var Options = $('<li>' + Questions[i].Options[j] + '</li>');
                $(ul).append(Options);
            }

            RandomizeOptions(ul);
            console.log(ul);
            $(Question).append(ul);
            
            var Answer = $('<div><div> Correct Answer:' + Questions[i].Answer + '</div><div><img src=' + Questions[i].Image + '/></div></div>')

            $(Question).append(Answer);
            $('.game-window').append(Question);
        }

       Run();

    }


    function RandomizeOptions(ul) {
        //var ul = document.querySelector('ul');
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }

    function Run() {

      intervalId = setInterval(decrement, 1000);

    }


    function decrement() {
      Timer--;
      $('#game-time').html('<h3>' + Timer + '</h3>');
      if (Timer === 0) {
         stop();
         $('#message').text(Message[0]);
      }
    }

    function stop() {
      clearInterval(intervalId);
    }
    //setTimeout(NextQuestion, 30000);
    
});