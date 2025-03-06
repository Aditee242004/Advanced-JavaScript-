async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const city = document.getElementById("cityInput").value;
    const weatherDiv = document.getElementById("weatherResult");

    if (!city) {
        weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found.");
        }
        const data = await response.json();

        weatherDiv.innerHTML = `
            <h3>Weather in ${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
