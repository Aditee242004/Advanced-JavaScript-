const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

// Simulated geolocation coordinates
const simulatedLocation = {
    latitude: 40.7128, // Example: New York City
    longitude: -74.0060
};

// Function to fetch weather data
async function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

// Function to display weather information
function displayWeather(data) {
    console.log("Weather Data:", data);

    const weatherInfo = `
        Location: ${data.name}
        Temperature: ${data.main.temp}°C
        Weather: ${data.weather[0].description}
        Humidity: ${data.main.humidity}%
        Wind Speed: ${data.wind.speed} m/s
    `;

    document.getElementById("weather").innerText = weatherInfo;
}

// Fetch and display weather
fetchWeather(simulatedLocation.latitude, simulatedLocation.longitude);
