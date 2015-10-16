var Game = (function() {
  console.log('Hi');

//shoot alert w/ game rules and/or add game rules as divs into page (HTML)???

//global vars
  var time = 15;
  var mysteryWord = 'cantaloupe';
  var wordArray = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];


  return {


//timer - wk02/d04-Instructor
    //links start button to timer
    startGame: function() {
      $('button#start').on('click', function(){
        var intervalId = setInterval(function(){
          $('button#timer').text(time);
          time--;
          $('button#timer').text(time + "s");
          $('button#start').css( "visibility", "hidden" );
          if(time === 0) {
            clearInterval(intervalId);
            //set up alert, make div for alert or change timer on gameOver
          };
        }, 1000)
        Game.renderCards();
        Game.renderBlanks();
     });
    },



//memory game1
    //attaches images to class groups once clicked & sets value to revealed
    // click 3 cards,
    //   once clicked - checkSet,
    //     if set - keep cards up and change letter
    //     if not set - hide/reset cards
    renderCards: function() {
      $('#t1').on('click', function() {
        $('#t1').show('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="T"></img>');
        $('#t1').val('1');
      });
      $('#t2').on('click', function() {
        $('#t2').show('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="T"></img>');
        $('#t2').val('1');
      });
      $('#t3').on('click', function() {
        $('#t3').show('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="T"></img>');
        $('#t3').val('1');
      });
      $('#a1').on('click', function() {
        $('#a1').show('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="A"></img>');
        $('#a1').val('2');
      });
      $('#a2').on('click', function() {
        $('#a2').show('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="A"></img>');
        $('#a2').val('2');
      });
      $('#a3').on('click', function() {
        $('#a3').show('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="A"></img>');
        $('#a3').val('2');
      });
      $('#a3').val('2');
      $('#e1').on('click', function() {
        $('#e1').show('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="E"></img>');
        $('#e1').val('3');
      });
      $('#e2').on('click', function() {
        $('#e2').show('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="E"></img>');
        $('#e2').val('3');
      });
      $('#e3').on('click', function() {
        $('#e3').show('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="E"></img>');
        $('#e3').val('3');
      });
    },
    //Bugs: when I click the same card 2x, 2 imgs appear, etc.
    //checkSet funcion runs immediately with startGame and never checks set again


    checkSet: function() {
      if(($('#t1').val() + $('#t2').val() + $('#t3').val() === 3) ||
          ($('#a1').val() + $('#a2').val() + $('#a3').val() === 6) ||
          ($('#t1').val() + $('#t2').val() + $('#t3').val() === 9)) {
        console.log('yes');
      } else {
        console.log('no');
      }
    },
    //next steps:
    // if not all match, then hide ()
    // function showImage(){
    // 	$('#imgSwitch').show();
    // }
    // function hideImage(){
    // 	$('#imgSwitch').hide();
    // }



//hangman - should declare win > should stop timer if win OR take 10s off timer if lose
    //displays blanks on startGame
    renderBlanks: function() {
      var wordArray = ['_', '_', '_', '_', '_', '_', '_', '_', '_']; //global var test
      $('#blank-spaces').text(wordArray.join(' '));
    }, //link to startGame


    //replaces blanks with input when submit button is clicked
    renderGuess: function() {
      $('#submit').on('click', function() {
        $('#blank-spaces').text($('#input').val().split('').join(' '));
      });
    },
    //next steps:
    // merge render with win to display winning input?


    //returns winState by checking input against mysteryWord
    winState: function() {
      var mysteryWord = 'cantaloupe'; //global var test
      $('#submit').on('click', function() {
        if ($('#input').val() === mysteryWord) {
          $('#blank-spaces').text($('#input').val().split('').join(' '));
          $('#input').val('YOU GOT IT! GAME OVER');
           //stop game here
        } else {
          $('#input').val('Wrong word! Guess again.'); //link to timer: -10s for each wrong guess
        };
      });
    }
    //Bugs:
    // -red color never changes back, .css('color', 'limegreen')
    //-'C'antaloupe input returns wrong word...



    //next steps: link to timer & flip cards (checkSet)









  }
})();
Game.startGame();
Game.winState();
// Game.renderCards();




//
// checkSetTwo: function() {
//   if(($('#t1').val() + $('#t2').val() + $('#t3').val() === 3)) {
//     console.log('yes');
//
//   };
//
//
//
//
//    ||
//       ($('#a1').val() + $('#a2').val() + $('#a3').val() === 6) ||
//       ($('#t1').val() + $('#t2').val() + $('#t3').val() === 9)) {
//     console.log('yes');
//   } else {
//     console.log('no');
//   }
// },
