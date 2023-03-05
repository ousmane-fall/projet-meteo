function createDetailedCard(data) {
    const { dt, main: { temp, feels_like, humidity, pressure }, weather: [ { description, icon } ] } = data;
    const day = new Date(dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' });
    const card = document.createElement('div');
    card.classList.add('detailed-card');
    card.innerHTML = `
      <h2>${day}</h2>
      <p><img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}"> ${description}</p>
      <p>Temperature : ${Math.round(temp)}°C</p>
      <p>Ressenti : ${Math.round(feels_like)}°C</p>
      <p>Humidite : ${humidity}%</p>
      <p>Pression : ${pressure} hPa</p>
    `;
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click', () => card.remove());
    card.appendChild(closeButton);
    document.body.appendChild(card);
  }



/*


      // Ajoutez votre JavaScript ici pour récupérer les informations spécifiques à chaque jour
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const dayName = urlParams.get('dayName');
      const weatherData = JSON.parse(localStorage.getItem('weatherData'));
      const dayData = weatherData.find(item => new Date(item.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' }) === dayName);
      
      const dayNameElement = document.getElementById('day-name');
      dayNameElement.textContent = dayName;
      
      const temperatureElement = document.getElementById('temperature');
      temperatureElement.textContent = `${Math.round(dayData.main.temp)}°C`;
      
      const humidityElement = document.getElementById('humidity');
      humidityElement.textContent = `${dayData.main.humidity}%`;
      
      const pressureElement = document.getElementById('pressure');
      pressureElement.textContent = `${dayData.main.pressure} hPa`;
      
      const descriptionElement = document.getElementById('description');
      descriptionElement.textContent = dayData.weather[0].description;


/*const searchParams = new URLSearchParams(window.location.search);
const day = searchParams.get('day');
const temp = searchParams.get('temp');
const feels_like = searchParams.get('feels_like');
const humidity = searchParams.get('humidity');
const pressure = searchParams.get('pressure');
const description = searchParams.get('description');
const icon = searchParams.get('icon');

// Affichage des informations météorologiques sur la page
document.getElementById('day').textContent = day;
document.getElementById('temp').textContent = `${temp}°C`;
document.getElementById('feels-like').textContent = `Ressenti : ${feels_like}°C`;
document.getElementById('humidity').textContent = `Humidité : ${humidity}%`;
document.getElementById('pressure').textContent = `Pression : ${pressure} hPa`;
document.getElementById('description').textContent = description;
document.getElementById('icon').src = `https://openweathermap.org/img/w/${icon}.png`;
document.getElementById('icon').alt = description;
*/
