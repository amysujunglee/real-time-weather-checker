const result = document.getElementById('result')
const country = document.getElementById('country-code')
const city = document.getElementById('city-name')

country.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getWeatherData();
  }
});

city.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getWeatherData();
  }
});

function getWeatherData() {
  let cityName = document.getElementById("city-name").value;
  let countryCode = document.getElementById("country-code").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=28155f48901bf4bd88a7799d5ea9eeca&units=metric`)
    .then(res => res.json())
    .then(data => {
      result.innerHTML = `<p class="font-weight-bold mb-2">${data.name}</p>
      <p class="mb-0">Temperature: ${data.main.temp}&deg;</p>
      <p class="mb-0">Humidity: ${data.main.humidity}%</p>
      <p class="mb-0 text-capitalize">Description: ${data.weather[0].description}</p>`
    })
    .catch(error => alert("Please enter a correct country and city name!"));
}
