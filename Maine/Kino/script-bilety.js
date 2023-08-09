const moviesData = {
  'czerwiec-5': [
    { title: 'SPIDER-MAN: POPRZEZ MULTIWERSUM', time: '15:00', hall: 'sala1' },
    { title: 'SZYBCY I WŚCIEKLI 10', time: '19:00', hall: 'sala2' }
  ],
  'czerwiec-6': [
    { title: 'SPIDER-MAN: POPRZEZ MULTIWERSUM', time: '14:30', hall: 'sala1' },
    { title: 'STRAŻNICY GALAKTYKI: VOLUME 3', time: '17:30', hall: 'sala3' }
  ],
  'czerwiec-7': [
    { title: 'MOJE WAKACJE Z RUDYM', time: '16:00', hall: 'sala2' },
    { title: 'PADDINGTON 2', time: '18:30', hall: 'sala3' }
  ],
  'czerwiec-8': [
    { title: 'MOJE WAKACJE Z RUDYM', time: '15:30', hall: 'sala1' },
    { title: 'MILCZENIE', time: '18:30', hall: 'sala2' }
  ],
  'czerwiec-9': [
    { title: 'PADDINGTON 2', time: '16:30', hall: 'sala1' },
    { title: 'MILCZENIE', time: '19:30', hall: 'sala3' }
  ]
  // Dodaj filmy dla pozostałych dni/miesięcy tutaj
};

const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const movieSelect = document.getElementById('movie');
const timeSelect = document.getElementById('time');
const hallSelect = document.getElementById('hall');
const reserveButton = document.getElementById('reserveButton');

function updateMovieOptions() {
  const selectedMonth = monthSelect.value;
  const selectedDay = daySelect.value;
  const key = `${selectedMonth}-${selectedDay}`;
  const movies = moviesData[key] || [];

  movieSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';

  for (const movie of movies) {
    const option = document.createElement('option');
    option.value = movie.title;
    option.textContent = movie.title;
    movieSelect.appendChild(option);
  }

  timeSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  hallSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  reserveButton.disabled = true;
}

function updateTimeOptions() {
  const selectedMonth = monthSelect.value;
  const selectedDay = daySelect.value;
  const selectedMovie = movieSelect.value;
  const key = `${selectedMonth}-${selectedDay}`;
  const movies = moviesData[key] || [];

  timeSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';

  for (const movie of movies) {
    if (movie.title === selectedMovie) {
      const option = document.createElement('option');
      option.value = movie.time;
      option.textContent = movie.time;
      timeSelect.appendChild(option);
    }
  }

  hallSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  reserveButton.disabled = true;
}

function updateHallOptions() {
  const selectedTime = timeSelect.value;
  const selectedMovie = movieSelect.value;
  const selectedDay = daySelect.value;
  const selectedMonth = monthSelect.value;
  const key = `${selectedMonth}-${selectedDay}`;
  const movies = moviesData[key] || [];

  hallSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';

  for (const movie of movies) {
    if (movie.title === selectedMovie && movie.time === selectedTime) {
      const option = document.createElement('option');
      option.value = movie.hall;
      option.textContent = movie.hall;
      hallSelect.appendChild(option);
    }
  }

  reserveButton.disabled = true;
}

function resetForm() {
  monthSelect.value = 'czerwiec';
  daySelect.value = '';
  movieSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  timeSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  hallSelect.innerHTML = '<option value="" disabled selected>Wybierz</option>';
  reserveButton.disabled = true;
}

monthSelect.addEventListener('change', updateMovieOptions);
daySelect.addEventListener('change', updateMovieOptions);
movieSelect.addEventListener('change', updateTimeOptions);
timeSelect.addEventListener('change', updateHallOptions);
reserveButton.addEventListener('click', resetForm);
