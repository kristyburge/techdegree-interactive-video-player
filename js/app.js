// Configure the video player - MediaElementJS
$('.vid__player').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'fullscreen'],
  startLanguage: 'en'
});

// Global Variables
var myVideo, transcript, span;
myVideo = document.querySelector('video');
transcript = document.querySelector('.transcript__container');
span = document.querySelectorAll('.transcript__container span');

// Create an event listener that will trigger as the video time updates,and attach it to the video element
// This will handle two use cases:
// 1. regular video playback
// 2. user selects transcript position
myVideo.addEventListener('timeupdate', function(){
  // Create variable to store the current time of the video element
  var timeIs = myVideo.currentTime;

  // Loop over each span element.
  for (var i = 0; i < span.length; i++) {

    // Save the value of the data-start and data-end attributes
    var start = span[i].getAttribute('data-start');
    var end = span[i].getAttribute('data-end');

    // Check if the time is between data-start and data-end attributes
    // Add and remove the active class based on the condition
    if ( timeIs >= start && timeIs < end ) {
      span[i].classList.add('active');
    } else {
      span[i].classList.remove('active');
    }
  }
});

transcript.addEventListener('click', function(event){

  // Use event bubbling to capture the element that triggered the event
  var selected = event.target;
  if (selected.tagName === 'SPAN') {

    // Read the data-start attribute and set the current time position of the video
      var start = selected.getAttribute('data-start');

      // Move the video player to the position of the current span
      myVideo.currentTime = start;

      // If the video is NOT playing already, then play it
      if (myVideo.paused) {
        myVideo.play();
      }
    }
});
