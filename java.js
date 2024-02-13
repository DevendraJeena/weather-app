const searchBox = document.querySelector("#btn");
const searchBtn = document.querySelector("#glass");
const tempt = document.querySelector("#temperature");
const city = document.querySelector("#city");
const percent = document.querySelector(".percent");
const speed = document.querySelector(".speed");
const weatherIcon = document.querySelector("#weather");
const bottom = document.querySelector(".bottom");


const apikey = "fa0f4d29acf82a1dd481c57f883f53f6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(name){
    const response = await fetch(apiUrl + name +`&appid=${apikey}`);


    if(response.status== 404){
       tempt.innerText = "";
       city.innerText = "invalid name.\n please try again !!!";
       bottom.innerText = "";
    }else{
        let data = await response.json();
    
    city.innerText = data.name;
    tempt.innerText = Math.round(data.main.temp) + "°C";
    percent.innerText = data.main.humidity +"%";
    speed.innerText = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    } 
   }}

searchBtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
});

 