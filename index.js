var Twitter = require('twitter');
var AYLIENTextAPI = require('aylien_textapi');
var tokens = require('./tokens.js')

// =======================TOKENS==================================

var client = new Twitter({
  consumer_key: tokens.consumer_key,
  consumer_secret: tokens.consumer_secret,
  access_token_key: tokens.access_token_key,
  access_token_secret: tokens.access_token_secret
});
 

var textapi = new AYLIENTextAPI({
  application_id: tokens.application_id,
  application_key: tokens.application_key
});



// =======================TWITTER==================================


//var used to collect the stream
var tweet;


// get twitter stream
var stream = client.stream('statuses/filter', {track: 'bitcoin'});
stream.on('data', function(event) {
	tweet = event.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/#/g, "").toString()
});


//send array every 30 sends
setInterval(function(){
	//console.log(tweet)
	analyzeText(tweet, "bitcoin")
}, 2000)





// =======================AYLIEN==================================

// passes text and coin to Aylien
function analyzeText(text, coin){
	textapi.sentiment({
	  'text': text
	}, function(error, response) {
		console.log(response)
		if (response.polarity !== 'neutral'){
			tradeCrypto(response.polarity, coin)
		}
	});	
}

function tradeCrypto(polarity, coin){
	console.log("trade " + polarity)
	console.log("trade " + coin)
}

