import { useState } from "react"

const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className="container">
      <h1 className="weather__title">weather App</h1>
      <h2 className="weather__subtitle">{weather?.name}, {weather?.sys.country}</h2>
      <div className="descriptions">
      <div className="weather__icon">
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
        alt="" />
      </div>
      <section className="weather__section">
        <h3 className="weather__description">"{weather?.weather[0].description}"</h3>
        <ul className="weather__list">
          <li><span>Wind Speed</span><span className="span__weather">{weather?.wind.speed}m/s</span></li>
          <li><span>Clouds</span><span className="span__weather">{weather?.clouds.all}%</span></li>
          <li><span>Pressure</span><span className="span__weather">{weather?.main.pressure}hPa</span></li>
        </ul>
      </section>
        </div>
      <h2 className="weather__temp">{isCelsius ? `${temp?.celsius} ºC` : `${temp?.fahrenheit} ºF`}</h2>
      <button className="weather__btn" onClick={handleChangeTemp}>{isCelsius ? 'Change to ºF' : 'Change to ºC'}</button>
    </article>
  )
}

export default WeatherCard