async function fetchWeatherData(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b58796eff90ca68d6822b1207ee61d67`
    const response = await fetch(url)
    const data = await response.json();
    let city = document.getElementById("city");
    city.innerHTML = data.name;
    let windSpeed = document.getElementById("wind_speed");
    windSpeed.innerHTML = data.wind.speed + " km/hr";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity + " g/kg";
    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round((data.main.temp) - 273.15) + "°C";
    console.log(data);
    let searchButton = document.querySelector(".searchbut");
}

function fetchCity() {
    let cityNameInput = document.getElementById("cityName");
    if (cityNameInput.value === "") {
        alert("Enter a city name");
    } else {
        fetchWeatherData(cityNameInput.value);
        cityNameInput.value = "";
    }
}