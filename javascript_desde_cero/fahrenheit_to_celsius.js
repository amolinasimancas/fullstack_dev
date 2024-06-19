const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map(
  (fahrenheit) => (5 / 9) * (fahrenheit - 32),
);
console.log("Temperatures In Fahrenheit: ", temperaturesFahrenheit);
console.log("Temperatures In Celsius: ", temperaturesCelsius);