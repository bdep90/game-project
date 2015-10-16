var Game = (function(){
  console.log('Hi');
//maybe shoot alert w/ game rules and add game rules as divs into page (HTML)


  return {
    //wk02/d04-Instructor
    //link start button to timer
    startGame: function() {
      var time = 5;
      $('button#start').on('click', function(){
        var intervalId = setInterval(function(){
          $('button#timer').text(time);
          time--;
          $('button#timer').text(time + "s");
          $('button#start').css( "visibility", "hidden" );
          if(time === 0) {
            clearInterval(intervalId);
            //alert
          };
        }, 1000)
      });
    },
    //Bugs: when timer goes off, numbers can go negative (tried using clearInterval or setTimeout) & when I click start button twice, time decreases by 2s





    //attaches images to class groups once clicked
    renderCards: function() {
      $('#t1').on('click', function() {
        $('#t1').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="Tomato"></img>');
      });
      $('#t2').on('click', function() {
        $('#t2').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="Tomato"></img>')
      });
      $('#t3').on('click', function() {
        $('#t3').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="Tomato"></img>')
      });
      $('#a1').on('click', function() {
        $('#a1').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="Apricot"></img>')
      });
      $('#a2').on('click', function() {
        $('#a2').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="Apricot"></img>')
      });
      $('#a3').on('click', function() {
        $('#a3').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="Apricot"></img>')
      });
      $('#e1').on('click', function() {
        $('#e1').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="Eggplant"></img>')
      });
      $('#e2').on('click', function() {
        $('#e2').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="Eggplant"></img>')
      });
      $('#e3').on('click', function() {
        $('#e3').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="Eggplant"></img>')
      });
    },
    //Bugs: when I click the same card 2x, 2 imgs appear, etc.


//next step:
// if first class (ie: $(.flip-card.e)) is same for all clicked cards > set
// if not all match, then hide ()

  }
})();
Game.startGame();
Game.renderCards();
