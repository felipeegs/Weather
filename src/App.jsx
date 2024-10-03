import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "./components/weatherInformations/weatherInformations";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "654d7b7a618c88ac14c599e4f7db4770";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <div className='container'>
      <h1>Previsao do tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather} />}
    </div>
  );
}

export default App;
