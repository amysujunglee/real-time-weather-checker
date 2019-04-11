let weatherConditions = new XMLHttpRequest();
let weatherResult;

function getWeatherData() {
    let cityName = document.getElementById('city-name').value;
    let countryCode = document.getElementById('country-code').value;

    console.log(cityName, countryCode);
    
    weatherConditions.open('GET', `//api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=28155f48901bf4bd88a7799d5ea9eeca&units=metric`, true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);

    weatherConditions.onload = function () {
        if (weatherConditions.status === 200) {
            weatherResult = JSON.parse(weatherConditions.responseText);

            console.log(weatherResult);

            let resultDiv = document.getElementById('resultDiv');
            resultDiv.innerHTML = `${weatherResult.name}<br>Temperature: ${weatherResult.main.temp}&deg;<br>Humidity: ${weatherResult.main.humidity}%<br>Description: ${weatherResult.weather[0].description}`;
        } else {
            alert('Please enter a correct city and country name! (ex: USA(US), Canada(CA), South Korea(KR), China(CN), United Kingdom(UK)) Please find here more country codes. https://countrycode.org/');
        }
    }
}