// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}

let currentTemperature = weatherData.current.temperature;
let currentConditions = weatherData.current.conditions.toLowerCase();
let tomorrowTemperature = weatherData.forecast[0].temperature;
let tomorrowConditions = weatherData.forecast[0].conditions;
let nextTemperature = weatherData.forecast[1].temperature;
let nextConditions = weatherData.forecast[1].conditions;

console.log("Currently it is " + currentTemperature + " degrees and " + currentConditions + ". Tomorrow it will be " + tomorrowTemperature + " and " + tomorrowConditions +".");
console.log("The next day we will see " + nextConditions + " skies, with a temperature of " + nextTemperature + ".");
