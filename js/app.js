var Game = (function() {
  console.log('Hi');
  //shoot alert w/ game rules and/or add game rules as divs into page (HTML)???

//global vars - time, word, blanks,
  var time = 90;
  var mysteryWord = 'cantaloupe';
  var wordArray = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
  var hideCards = $('img').hide();


  return {

//timer - links start button to timer display and stops once time is up (alerts player in some way that time's up)
    startGame: function() {
      $('button#start').on('click', function(){
        var intervalId = setInterval(function(){
          $('button#timer').text(time);
          time--;
          $('button#timer').text(time + "s");
          $('button#start').css( "visibility", "hidden" );
          if(time <= 0) {
            clearInterval(intervalId);
            time = 0;
          };
        }, 1000)
        Game.renderBlanks();
        Game.renderCards();
        Game.checkSets();
        // Game.flipChecker();
     });
    },
    //bugs: only displays time in seconds



//word board - displays blanks on startGame
    renderBlanks: function() {
      $('#blank-spaces').text(wordArray.join(' '));
    },



//flip card game
    //attaches images to class groups once clicked & resets their values
    renderCards: function() {
      $('#t1').on('click', function() {
        $('#t1').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" class="t1"></img>');
        $('#t1').val('1');
      });
      $('#t2').on('click', function() {
        $('#t2').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" class="t2"></img>');
        $('#t2').val('1');
      });
      $('#t3').on('click', function() {
        $('#t3').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" class="t3"</img>');
        $('#t3').val('1');
      });
      $('#a1').on('click', function() {
        $('#a1').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" class="a1"></img>');
        $('#a1').val('2');
      });
      $('#a2').on('click', function() {
        $('#a2').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" class="a2"></img>');
        $('#a2').val('2');
      });
      $('#a3').on('click', function() {
        $('#a3').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" class="a3"></img>');
        $('#a3').val('2');
      });
      $('#a3').val('2');
      $('#e1').on('click', function() {
        $('#e1').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" class="e1"></img>');
        $('#e1').val('3');
      });
      $('#e2').on('click', function() {
        $('#e2').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" class="e2"></img>');
        $('#e2').val('3');
      });
      $('#e3').on('click', function() {
        $('#e3').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" class="e3"></img>');
        $('#e3').val('3');
      });
    },
    //bugs: will append several imgs to same card if clicked more than once



    // click 3 cards,
    //   once clicked - checks sets,
    //     if set - keep cards up and change letter
    //     if not set - hide/reset cards
    checkSets: function() {
      var checkSetsInterval = window.setInterval(function() {
        if($('#e1').val() + $('#e2').val() + $('#e3').val() === 9) {
        letterE = ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'e'];
        $('#blank-spaces').text(letterE.join(' '));
        time += 10; //link to timer: +10s for a matched set
        } else if($('#a1').val() + $('#a2').val() + $('#a3').val() === 6) {
          letterA = ['_', 'a', '_', '_', 'a', '_', '_', '_', '_', '_'];
          $('#blank-spaces').text(letterA.join(' '));
          time += 10; //link to timer: +10s for a matched set
        } else if($('#t1').val() + $('#t2').val() + $('#t3').val() === 3) {
          letterT = ['_', '_', '_', 't', '_', '_', '_', '_', '_', '_',];
          $('#blank-spaces').text(letterT.join(' '));
          time += 10; //link to timer: +10s for a matched set
        } else if($('#a1').val() + $('#a2').val() + $('#a3').val() === 6 && $('#e1').val() + $('#e2').val() + $('#e3').val() === 9) {
          lettersAE = ['_', 'a', '_', '_', 'a', '_', '_', '_', '_', 'e'];
          $('#blank-spaces').text(lettersAE.join(' '));
        } else if ($('#t1').val() + $('#t2').val() + $('#t3').val() === 3 && $('#a1').val() + $('#a2').val() + $('#a3').val() === 6) {
          lettersTA = ['_', 'a', '_', 't', 'a', '_', '_', '_', '_', '_'];
          $('#blank-spaces').text(lettersTA.join(' '));
        } else if ($('#e1').val() + $('#e2').val() + $('#e3').val() === 9 && $('#t1').val() + $('#t2').val() + $('#t3').val() === 3) {
          lettersET = ['_', '_', '_', 't', '_', '_', '_', '_', '_', 'e'];
          $('#blank-spaces').text(lettersET.join(' '));
        } else if ($('#e1').val() + $('#e2').val() + $('#e3').val() === 9 && $('#t1').val() + $('#t2').val() + $('#t3').val() === 3 && $('#a1').val() + $('#a2').val() + $('#a3').val() === 6) {
          lettersETA = ['_', 'a', '_', 't', 'a', '_', '_', '_', '_', 'e'];
          $('#blank-spaces').text(lettersETA.join(' '));
        } else {
          $.each($('img'), function() {
            if($('img').val('1') || $('img').val('2') || $('img').val('3')) {
            $('img').val('0');
            $('img').hide();
            };
          });
          };
          console.log(checkSetsInterval);
        }, 4000);
        while(time > 0) {
          return checkSetsInterval;
        };
      },
    //bugs: allows player to select more than 3 cards at a time during interval, interval could work better



//guess game - pauses game
    // guessGame: function() {
    //   $('#Peach', '#Orange', '#Green').on('click', function() {
    //     $('#input').val() ===
    //   });
    // },



//WIN - returns winState by checking input against mysteryWord > should stop timer if win OR -10s if lose
    winState: function() {
      $('#submit').on('click', function() {
        if ($('#input').val() === mysteryWord) {
          //replaces blanks with matching input when submit button is clicked
          $('#blank-spaces').text($('#input').val().split('').join(' '));
          $('#input').val('YOU GOT IT! GAME OVER').css('color', 'limegreen');
          time = 1; //stops game
        } else {
          time -= 10; //-10s for each wrong guess
          $('#input').val('Sorry! Guess again. ' + time + ' ' + 'sec left!');
        };
      });
    },
    //bugs: capitalized letters aren't accounted for




  }
})();
Game.startGame();
Game.winState();
