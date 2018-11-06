$(document).ready(function() {
  // --- our code goes here ---
  //const countChar = document.getElementsByName('text');
  $(".new-tweet textarea").keyup(function() {
    var counter = 140 - $(this).val().length;
    if (counter <= 0) {
      $(this).siblings('.counter').css('color', 'red');
    } else {
      $(this).siblings('.counter').css('color', 'black');
    }
    $(this).siblings('.counter').text(counter); 
  });
});