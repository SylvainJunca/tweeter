$(document).ready(function() {
  // --- our code goes here ---
  //const countChar = document.getElementsByName('text');
  $(".new-tweet textarea").keyup(function() {
    //console.log(this.value);
    var counter = 140 - $(this).val().length;
    if (counter <= 0) {
      $(this).siblings('.counter').css('color', 'red');
    }
    $(this).siblings('.counter').html(counter); 
  });
});