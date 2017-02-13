// max 1 hit per second

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "d1a49f72",
  application_key: "55251e8d6cbbb636f144d1ecffa964d0"
});

var url = 'https://en.wikipedia.org/wiki/Fall_of_man'

textapi.sentiment({
  'url': url
}, function(error, response) {
	console.log(response.polarity);
	console.log(response.polarity_confidence);

	var polarity = response.polarity
	var polarityConfidence = response.polarity_confidence
});