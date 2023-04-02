// Pobieramy element video z dokumentu HTML
const video = document.querySelector('video');

// Pobieramy element progress bar z dokumentu HTML
const progressBar = document.querySelector('progress');

// Aktualizujemy wartość progress bar na podstawie postępu odtwarzania wideo
video.addEventListener('timeupdate', function() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});

// Zmieniamy pozycję odtwarzania wideo po kliknięciu na progress bar
progressBar.addEventListener('click', function(event) {
  const progressWidth = progressBar.offsetWidth;
  const clickX = event.offsetX;
  const duration = video.duration;
  video.currentTime = (clickX / progressWidth) * duration;
});

// Obsługujemy przycisk odtwarzania/pauzy
const playPauseButton = document.getElementById('play-pause-button');
playPauseButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = 'Pauza';
  } else {
    video.pause();
    playPauseButton.innerHTML = 'Odtwórz';
  }
});
