import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  console.log(weather);

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>Sensacao Termica: {Math.round(weather.main.feels_like)}</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressao: {weather.main.pressure}</p>
      </div>
    </div>
  );
}
export default WeatherInformations;
