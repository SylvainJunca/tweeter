
// This function protects our tweets from Cross-Site Scripting
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
  const loadTweets = () => {
    $.get('/tweets', function (data) {
      $('#tweets-container').empty(); //empties the container to not charge/render tweets multiple times
      $('textarea').val(''); 
      renderTweets(data);
    })
  }

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  }

  const createTweetElement = (data) => {  
    const $article = $("<article>").addClass("tweet");
    const content =
            `
            <header class="tweet-header">
              <img class="avatar" src=${data.user.avatars.small}>
              <span class="full-name">${data.user.name}</span>
              <span class="username">${data.user.handle}</span>
            </header>
            <div class="tweet-text">${escape(data.content.text)}</div>
            <footer class="timestamp">
              <span>${data.created_at}</span>
              <span class='interact-menu'>
              <img class='icons' src='../images/icon-flag.png'>
              <img class='icons' src='../images/icon-retweet.png'>
              <img class='icons' src='../images/icon-like.png'>
              </span>
            </footer>`;

    return $article.append(content);
  }    
  
   //renders the tweets when the page loads 
  //renderTweets(data);


  $( document ).ready(function() {

 
    // The following toggles the new tweet area when the user
    // clicks on the compose button. Not that by default, this
    // element is hidden 
    $( ".compose" ).on('click', (function() {
    $( ".new-tweet" ).slideToggle( "fast" );
    $('textarea').focus();
    }));
  
  
  
    
    const $button = $('.new-tweet input');
    $button.on('click', function (event) {
      event.preventDefault();
      if($('textarea').val().length > 140) {
        $( ".error" ).html('Your message is too long to be posted').slideToggle( "slow" );
      } else if ($('textarea').val().length == 0){
        $( ".error" ).html('You should enter the thoughts you want to tweet').slideToggle( "slow" );
      } else {
        if ($(".error").is(":visible")) {
          $(".error").slideToggle("slow");
        }
        $.ajax({
          type: 'POST',
          url: '/tweets',
          data: $('textarea').serialize(),
          complete: loadTweets
      })
      };
    });
    loadTweets();
  })