const video = document.querySelector('#video');

window.addEventListener('scroll', function() {
  video.currentTime = window.scrollY * 0.01;
});
