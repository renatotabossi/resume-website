import React, {useEffect, useState} from 'react'

export default function TimeWeather() {
    let dateString = new Date();
    const options = {
        weekday: 'short',
        // year: 'numeric', month: 'long', day: 'numeric'
    };
    let time = dateString.toLocaleTimeString("en-GB", {
        hour: '2-digit',
        minute: '2-digit'
    });
    let date = dateString.toLocaleDateString('en-US', options)

    const [weatherTemp,
        setWeatherTemp] = useState("");
    const [weatherForecast,
        setWeatherForecast] = useState("")
    const [weatherImage,
        setweatherImage] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=a37" +
                    "c85bba361e638481092e9daa85cd2#/";
            let response = await fetch(url);
            let data = await response.json();
            setWeatherTemp(data.main.temp);
            setWeatherForecast(data.weather[0].description);
            const image = data.weather[0].icon;
            setweatherImage("http://openweathermap.org/img/wn/" + image + "@2x.png");
        }
        fetchData()
    })

    return (
        <div className="time-weather">
            <div className='time-div'>
                {date}: {time}
           

            </div>
            <div className='weather-div'>
                <img src={weatherImage} alt={weatherForecast}/> 
                <div className='weather-icon-div'>
                    {Math.floor(weatherTemp)}℃
                </div>
            </div>
        </div>
    )
}
