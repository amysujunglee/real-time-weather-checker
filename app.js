const result = document.getElementById('result')

function getWeatherData() {
  let cityName = document.getElementById("city-name").value;
  let countryCode = document.getElementById("country-code").value;
  fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=28155f48901bf4bd88a7799d5ea9eeca&units=metric`)
    .then(res => res.json())
    .then(data => {
      result.innerHTML = `<p class="font-weight-bold mb-2">${data.name}</p>
      <p class="mb-0">Temperature: ${data.main.temp}&deg;</p>
      <p class="mb-0">Humidity: ${data.main.humidity}%</p>
      <p class="mb-0 text-capitalize">Description: ${data.weather[0].description}</p>`
    })
    .catch(error => alert("Please enter a correct country and city name!"));
}

// XMLHttpRequest version.
// function getWeatherData() {
//   let cityName = document.getElementById("city-name").value;
//   let countryCode = document.getElementById("country-code").value;

//   weatherConditions.open(
//     "GET",
//     `//api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=28155f48901bf4bd88a7799d5ea9eeca&units=metric`,
//     true
//   );
//   weatherConditions.responseType = "text";
//   weatherConditions.send(null);

//   weatherConditions.onload = function() {
//     if (weatherConditions.status === 200) {
//       weatherResult = JSON.parse(weatherConditions.responseText);

//       let resultDiv = document.getElementById("resultDiv");
//       resultDiv.innerHTML = `${weatherResult.name}<br>Temperature: ${weatherResult.main.temp}&deg;<br>Humidity: ${weatherResult.main.humidity}%<br>Description: ${weatherResult.weather[0].description}`;
//     } else {
//       alert("Please enter a correct city and country name!");
//     }
//   };
// }