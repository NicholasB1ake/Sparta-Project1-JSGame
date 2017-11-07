$(document).ready(function(){
    let grid = $('td')
  // $('#frogger1').click(function(){
  //   $('#frogger1').hide();
  // });

$(document).keydown(function(e) {
    switch(e.which) {
          case 37:
          forward()

          //$('#frogger1').hide();
          console.log('left');
          break;

          case 38:
          console.log('up');

          break;

          case 39:
          console.log('right');
          // right
          break;

          case 40: // down
          console.log('down');
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $(document).keyup(function(e) {
      switch(e.which) {
            case 37:
            $('#frogger1').show();
            console.log('left');
            break;

            case 38:
            console.log('up');

            break;

            case 39:
            console.log('right');
            // right
            break;

            case 40: // down
            console.log('down');
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

//$(this).on("keypress", function())
});

function forward(){
  console.log('')
}








// $('#frogger1').click(function(){
//   $('#frogger1').hide()


// let arrayPosition =
//
// for(let )

//});
