// max 1 hit per second
var tokens = require('./tokens.js')
var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
  application_id: tokens.application_id,
  application_key: tokens.application_key
});

var url = 'https://en.wikipedia.org/wiki/Fall_of_man'

textapi.sentiment({
  'text': 'Bitcoin dives below $1,000 bad'
}, function(error, response) {
	console.log(response.polarity);
	console.log(response.polarity_confidence);

	var polarity = response.polarity
	var polarityConfidence = response.polarity_confidence
});