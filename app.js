window.onload = function() {
  console.log('Hi');
//maybe shoot alert w/ game rules and add game rules as divs into page (HTML)


//wk02/d04-Instructor
//link start button to timer
  var startTimer = function() {
    var time = 20;
    $('button#start').on('click', function(){
      setInterval(function(){
        $('button#timer').text(time);
        time--;
        $('button#timer').text(time + "s");
      }, 1000)
    });
  }
  startTimer();

//Bugs: when timer goes off, numbers can go negative (tried using clearInterval or setTimeout) & when I click start button twice, time decreases by 2s


//attaches images to class groups once clicked
  var renderCards = function() {

    $('.flip-card.t').on('click', function() {
      $('.flip-card.t').append('<img src="/Users/BDep/GA-WDI/game-project/images/tomato.png" alt="Tomato"></img>')
    }) ;


    $('.flip-card.a').on('click', function() {
      $('.flip-card.a').append('<img src="/Users/BDep/GA-WDI/game-project/images/apricot.png" alt="Apricot"></img>')
    }) ;


    $('.flip-card.e').on('click', function() {
      $('.flip-card.e').append('<img src="/Users/BDep/GA-WDI/game-project/images/eggplant.png" alt="Eggplant"></img>')
    }) ;

  }
 renderCards();
//Bugs: when I click a card, every card of same type is revealed (for loop?)





  }
