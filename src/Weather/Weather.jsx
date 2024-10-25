import React,{useEffect, useState} from 'react'
import axios from 'axios'
import'./Weather.css'
const Weather = () => {
    const [weather,setWeather] = useState(null)
    const[city,setCity] = useState('New York')
    const getWeather = async() =>{
        try{
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a4237d4c95a146d4ac854421242210&q=${city}&aqi=no`)
            setWeather(response.data)
            console.log(response.data)
        }catch(error){
            console.error("Error fetching weather data: ",error)
        }
    }
    useEffect(()=>{
        getWeather()
    },[])
  return (
    <div className='weather-main'>
        <h1 className='weather-title'>Weather is {weather?.location?.name}</h1>
        <p className='weather-temp'>Tempreture : {weather?.current?.temp_c}C</p>
        <p className='weather-cond'>Condition: {weather?.current?.condition?.text}</p>
        <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
        />
        <button onClick={getWeather}>Search</button>

    </div>
  )
}


export default Weather