async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const city = document.getElementById("cityInput").value;
    const weatherDiv = document.getElementById("weatherResult");

    if (!city) {
        weatherDiv.innerHTML = "<p class='error'>Please enter a city name.</p>";
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
            <h2>${data.name}, ${data.sys.country}</h2>
            <p class="temp">${data.main.temp}°C</p>
            <p class="desc">${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML = `<p class='error'>Error: ${error.message}</p>`;
    }
}
