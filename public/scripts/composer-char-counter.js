$(document).ready(function() {
  $(".new-tweet textarea").keyup(function() {
    var counter = 140 - $(this).val().length;
    if (counter <= 0) {
      $(this).siblings('.counter').addClass('counter-negative');
    } else {
      $(this).siblings('.counter').removeClass('counter-negative');
    }
    $(this).siblings('.counter').text(counter); 
  });
});