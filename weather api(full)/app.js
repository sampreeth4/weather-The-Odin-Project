const cityName = document.querySelector('.input input');
const buttonEl = document.querySelector('.input button');
const climateImg = document.querySelector('.climateImg');
const toggle = document.querySelector('.weda');
const tge = document.querySelector('.tge');
async function checkWeather(city){
    const apiKey = 'f44f98c5d3cc4524960163308231410';

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await fetch(apiUrl);

    if(response.status == 400){
        document.querySelector('.error').classList.add = "tge";
        document.querySelector('.weather-data').classList.add = "weda";
    }
    else{
        var data = await response.json();

   
        console.log(cityName)
    
        console.log(data)
    
        document.querySelector('.temp').innerHTML = data.current.temp_c + '°c';
        document.querySelector('.place').innerHTML = data.location.name;
        document.querySelector('.country').innerHTML = data.location.country;
        document.querySelector('.speedKmh').innerHTML = data.current.wind_kph + ' km/h';
        document.querySelector('.time').innerHTML = data.location.localtime
        document.querySelector('.humidityPercent').innerHTML = data.current.humidity
    
        const outside = data.current.condition.text;
        console.log(outside)
    
        // ./images/clear.png
        if(outside == 'Clear'){
            climateImg.src='./images/clear.png';
        }
        else if(outside == 'Clouds'){
            climateImg.src='./images/clouds.png'
        }
        else if(outside == 'Drizzle'){
            climateImg.src='./images/drizzle.png'
        }
        else if(outside == 'Humidity'){
            climateImg.src='./images/humidity.png'
        }
        else if(outside == 'Mist'){
            climateImg.src='./images/mist.png'
        }
        else if(outside == 'Rain'){
            climateImg.src='./images/rain.png'
        }
        else if(outside == 'Snow'){
            climateImg.src='./images/snow.png'
        }
        else{
            climateImg.src='./images/clear.png'
        }
    }

}



buttonEl.addEventListener("click", ()=>{
    toggle.classList.toggle('weda');
    checkWeather(cityName.value);
})