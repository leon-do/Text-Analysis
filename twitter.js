var Twitter = require('twitter');
var tokens = require('./tokens.js')

var client = new Twitter({
  consumer_key: tokens.consumer_key,
  consumer_secret: tokens.consumer_secret,
  access_token_key: tokens.access_token_key,
  access_token_secret: tokens.access_token_secret
});
 


var eventArray = [];


// get twitter stream
var stream = client.stream('statuses/filter', {track: 'bitcoin'});
stream.on('data', function(event) {
	eventArray.push(text);
});

setInterval(function(){
	console.log(eventArray)
	eventArray = []
}, 30000)


