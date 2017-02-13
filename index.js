var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "d1a49f72",
  application_key: "key"
});

var url = 'https://en.wikipedia.org/wiki/Fall_of_man'

textapi.sentiment({
  'url': url
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});