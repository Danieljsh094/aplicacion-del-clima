import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './Components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() => {
    if(coords) {
      const Apikey = '3f79a50967c5d9ae1ecbaa4bf6a4f84e'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${Apikey}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          fahrenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
        }
        setTemp(obj)
      })
      .catch(err => setWeather(err))
    }
  }, [coords])


  return (
      <div className='principal'>
        <WeatherCard 
        weather={weather}
        temp={temp}
        />
      </div>
  )
}

export default App
