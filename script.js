let playerChoice = "X";
let playerScore = 0;
let computerChoice = "O";
let computerScore = 0;
let playersTurn = true;
let computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);

$(document).ready(function(){
  $(".board-cell").click(function(){

      if (playersTurn) {
          if ($(this).html() != "&nbsp;") {
              $('.message-text').text(x + " Trying to cheat? You loose a turn.");
          } else if ($(this).html() == computerChoice){
              $('.message-text').text(x + " Trying to cheat? You loose a turn.");
          } else {
             $(this).text(playerChoice);
             playersTurn = false;	  			
          };
     }

    if (checkWin(playerChoice) == true) {
        playerScore += 1;
        $('.playerScore').html(playerScore);		    	
        resetBoard();
    };
    if (checkTie() == true) {
        resetBoard();
    };

     while ($(computerSpot).html() != "&nbsp;") {
        computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);
     }
     setTimeout(function(){
         $(computerSpot).text(computerChoice);
         playersTurn = true;

    if (checkWin(computerChoice) == true) {
        computerScore += 1;
        $('.computerScore').html(computerScore);
        resetBoard();
    };
    if (checkTie() == true) {
        resetBoard();
    };	 		
     },300);
   });
});

function checkWin(x){
    var win = false;
    if ($('.cell-0-0').text() == x
     && $('.cell-0-1').text() == x
     && $('.cell-0-2').text() == x ||
         $('.cell-1-0').text() == x
     && $('.cell-1-1').text() == x
     && $('.cell-1-2').text() == x ||
         $('.cell-2-0').text() == x
     && $('.cell-2-1').text() == x
     && $('.cell-2-2').text() == x) {
         $('.message-text').text(x + " Won last game");
        win = true;
    };
    if ($('.cell-0-0').text() == x
     && $('.cell-1-0').text() == x
     && $('.cell-2-0').text() == x ||
         $('.cell-0-1').text() == x
     && $('.cell-1-1').text() == x
     && $('.cell-2-1').text() == x ||
         $('.cell-0-2').text() == x
     && $('.cell-1-2').text() == x
     && $('.cell-2-2').text() == x) {
         $('.message-text').text(x + " Won last game");
        win = true;
    };
    if ($('.cell-0-0').text() == x
     && $('.cell-1-1').text() == x
     && $('.cell-2-2').text() == x ||
         $('.cell-0-2').text() == x
     && $('.cell-1-1').text() == x
     && $('.cell-2-0').text() == x) {
         $('.message-text').text(x + " Won last game");
        win = true;
    };
    return win;
}

function resetBoard(){
    $('.board-cell').html('&nbsp;');
}

function checkTie(){
    var tie = false;
    if ($('.cell-0-0').html() != "&nbsp;" 
    &&  $('.cell-0-1').html() != "&nbsp;"
    &&  $('.cell-0-2').html() != "&nbsp;"
    &&  $('.cell-1-0').html() != "&nbsp;"
    &&  $('.cell-1-1').html() != "&nbsp;"
    &&  $('.cell-1-2').html() != "&nbsp;"
    &&  $('.cell-2-0').html() != "&nbsp;"
    &&  $('.cell-2-1').html() != "&nbsp;"
    &&  $('.cell-2-2').html() != "&nbsp;") {
        $('.message-text').text("It's A Tie");	    		
        tie = true;
    };
    return tie;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}