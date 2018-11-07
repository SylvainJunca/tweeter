/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
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
         <div class="tweet-text">${data.content.text}</div>
         <footer class="timestamp">
          <div>${data.created_at}</div>
         </footer>`

       return $article.append(content);
}      


const $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

});