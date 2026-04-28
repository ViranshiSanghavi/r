// React with AJAX

import React, { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // AJAX call using fetch
    fetch("/weather.json")
      .then(response => response.json())
      .then(data => setWeather(data))
     // .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Weather Report</h2>

      <p>Temperature: {weather.temperature}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

export default App;