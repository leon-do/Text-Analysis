var Twitter = require('twitter');
 
var client = new Twitter({

});
 




var stream = client.stream('statuses/filter', {track: 'html'});
stream.on('data', function(event) {
  console.log(event.text);
});