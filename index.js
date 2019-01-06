// cool shit goes here
var settings = {
  "url": "https://api.imgur.com/3/gallery/search/viral/?q=nissansilvia",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Client-ID fa986ef3b7f9f36"
  },
};
$.ajax(settings).done(function (response) {
  console.log(response);
});
