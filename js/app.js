// Configure the video player
$('.vid__player').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'fullscreen'],
  startLanguage: 'en'
});

var myVideo = document.querySelector('video');
// Select all the span elements inside the transcript
var transcript = document.querySelector('.transcript__container');
var span = document.querySelectorAll('.transcript__container span');

// Create an event listener that will trigger as the video time updates,
// and attach it to the video element
myVideo.addEventListener('timeupdate', function(){
  // Create variable to store the current time of the video element
  var timeIs = myVideo.currentTime;
  // Loop over each span element.
  for (var i = 0; i < span.length; i++) {
    // console.log(span[i].textContent);
    var start = span[i].getAttribute('data-start');
    var end = span[i].getAttribute('data-end');
    // Check if the time is between data-start and data-end attributes
    if ( timeIs >= start && timeIs < end ) {
      // do something
      span[i].classList.add('active');
    } else {
      span[i].classList.remove('active');
    }
  }
});
