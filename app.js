// Vérification de la compatibilité avec les Service Workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('ServiceWorker registration successful with scope: ', registration.scope))
      .catch(err => console.log('ServiceWorker registration failed: ', err));
  });
}

// Récupération des données météorologiques de Paris
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=367b4be22d94816898377fabc9fc9de9')
  .then(response => response.json())
  .then(data => {
    const weatherData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    const weatherContainer = document.getElementById('weather-container');

    // Création des cartes météo
    weatherData.forEach(item => {
      const { dt, main: { temp }, weather: [ { description } ] } = item;
      const day = new Date(dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' });
      const card = document.createElement('div');
      card.classList.add('weather-card');
      card.innerHTML = `
        <h2>${day}</h2>
        <p>${Math.round(temp)}°C</p>
        <p>${description}</p>
      `;
      card.addEventListener('click', () => createDetailedCard(item));
      weatherContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));


