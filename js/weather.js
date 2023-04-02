const API_KEY = "b9eca7ba404eaad9ba06f4d00add1f07"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = `현재 당신이 계신 지역은 ${data.name}입니다`;
            weather.innerText = `날씨는 ${data.weather[0].main}이고 온도는 ${data.main.temp}도입니다`;
    });
}

function onGeoError(){
    alert("Can't find you. No weater for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);