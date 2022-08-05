

const API_KEY = "000c4eb7aa0e63bba02cda7f07d1e2eb"


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  cl.log("You live in", lat, lon);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      const weather = dc.querySelector("#weather span:first-child")
      const city = dc.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} /${data.weather[0].main}@`;
    });
}



function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

