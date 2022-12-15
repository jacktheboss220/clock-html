// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "0c68c60adad5ba90697974a6fe42e37f",
    // key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// event listener function on keypress

searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});

// get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            weather.json().then(r => {
                console.log(r);
            })
        })
}

//show weather Report
function showWeatherReort(weather) {
    console.log(weather);
}