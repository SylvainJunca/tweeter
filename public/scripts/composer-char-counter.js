$(document).ready(function() {
  // --- our code goes here ---
  //const countChar = document.getElementsByName('text');
  $(".new-tweet textarea").keyup(function() {
    //console.log(this.value);
    console.log(140 - $(this).val().length);
    
  });
});