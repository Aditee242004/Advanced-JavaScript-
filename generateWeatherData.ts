function generateWeatherData(city) {
    const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Snowy"];
    
    let forecast = [];
    for (let i = 1; i <= 3; i++) {
        let temp = (Math.random() * (35 - (-5)) + (-5)).toFixed(1);
        let condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        
        forecast.push({
            day: `Day ${i}`,
            temperature: `${temp}°C`,
            condition: condition
        });
    }
    
    return {
        city: city,
        forecast: forecast
    };
}

console.log(generateWeatherData("New York"));
