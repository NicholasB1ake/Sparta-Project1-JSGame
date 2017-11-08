$(document).ready(function(){
  var grid = $('td')
  var frogIndex = 9;

// Global variables, grid = the table array and

  var count = 60, timer = setInterval(function() {
      count--;
      $("#demo").html(count);
      if (count === 1)
        alert('you loose');
        if(count == 1) clearInterval(timer);
      }, 1000);


      $(document).keydown(function(event) {
        switch(event.which) {
          case 37:
          left(event);
          console.log('left');
          break;
          case 38:
          forward(event);
          break;
          case 39:
          right(event);
          console.log('right');
          // right
          break;
          case 40: // down
          backwards(event)
          console.log('down');
          break;

          default: return;
        }
        event.preventDefault();
      });

// Switch statements for curser key binds


function forward(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';

  $(oldFrog).remove()

  //current index + 20;
  var newfIndex = fIndex + 20;
  frogIndex = newfIndex;
  var element = 'td#' + newfIndex;
  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');
  checkForWin(newfIndex);
  checkForLoss(newfIndex);
}
//Movement functions allow frogger to move around the board and check for winning conditions.

function left(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';
  $(oldFrog).remove()

  //current index + 20;
  var newfIndex = fIndex - 1;
  frogIndex = newfIndex;
  var element = 'td#' + newfIndex;
  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');
};

function right(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';
  $(oldFrog).remove()
  //current index + 20;
  var newfIndex = fIndex + 1;
  frogIndex = newfIndex;
  var element = 'td#' + newfIndex;
  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');
};

function backwards(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';
  $(oldFrog).remove()
  var newfIndex = fIndex - 20;
  frogIndex = newfIndex;
  var element = 'td#' + newfIndex;
  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');

};

function checkForLoss(fIndex){
  if ('td#' + fIndex === 'td#148'){
    alert('You Lose')
    gameEnd();
    // clearInterval(timer)

  }


}

function checkForWin(fIndex){
  if ('td#' + fIndex === 'td#189'){
    alert('Winner');
    gameEnd();
  }
}

function gameEnd(){
  if(alert('Play again?')){}
  else  window.location.reload();
}

//Win and lose fucntions










});











//});
