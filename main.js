$(document).ready(function(){
    var grid = $('td')
    var frogIndex = 9;


  var count = 60, timer = setInterval(function() {
      count--;
      $("#demo").html(count);
      if (count === 2)
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

          default: return; // exit this handler for other keys
      }
      event.preventDefault(); // prevent the default action (scroll / move caret)
  });

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
};

function left(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';

  $(oldFrog).remove()

  //current index + 20;
  var newfIndex = fIndex - 1;
  debugger

  frogIndex = newfIndex;

  debugger;

  var element = 'td#' + newfIndex;

  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');
};

function right(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';

  $(oldFrog).remove()

  //current index + 20;
  var newfIndex = fIndex + 1;
  debugger

  frogIndex = newfIndex;



  var element = 'td#' + newfIndex;

  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');
};

function backwards(event){
  var fIndex = frogIndex;
  var oldFrog = 'td#' + fIndex + ' img';

  $(oldFrog).remove()

  //current index + 20;
  var newfIndex = fIndex - 20;


  frogIndex = newfIndex;



  var element = 'td#' + newfIndex;

  $(element).html('<img id="frogger1" src="images/froggerSpriteOne1.png" alt="">');

};

function checkForWin(fIndex){
  debugger;
  if ('td#' + fIndex === 'td#189'){
    alert('sdfsdf');
  }
}











});











//});
