var Twitter = require('twitter');
var tokens = require('./tokens.js')

var client = new Twitter({
  consumer_key: tokens.consumer_key,
  consumer_secret: tokens.consumer_secret,
  access_token_key: tokens.access_token_key,
  access_token_secret: tokens.access_token_secret
});
 




var stream = client.stream('statuses/filter', {track: 'html'});
stream.on('data', function(event) {
  console.log(event.text);
});