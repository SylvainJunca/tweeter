$( document ).ready(function() {

 

  $( ".compose" ).on('click', (function() {
  $( ".new-tweet" ).slideToggle( "slow" );
  }));



$(function() {
  const $button = $('.new-tweet input');
  $button.on('click', function (event) {
    event.preventDefault();
    if($('textarea').val().length > 140) {
      alert('your message is too long');
    } else if ($('textarea').val().length == 0){
      alert('You should enter the thoughts you want to tweet');
    } else {
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $('textarea').serialize(),
        complete: loadTweets
    })
    }
    
  });
});

// This function protects our tweets from Cross-Site Scripting
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
  const loadTweets = () => {
    $.get('/tweets', function (data) {
      $('#tweets-container').empty(); //empties the container to not charge/render tweets multiple times
      renderTweets(data);
    })
  }

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
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
              <div>${data.created_at}</div>
            </footer>`;

    return $article.append(content);
  }    
  
  loadTweets(); //renders the tweets when the page loads 
  //renderTweets(data);
});