const convertToCelsius = function (fahrenheit) {
	return Math.round((5 / 9) * (fahrenheit - 32) * 10) / 10;
};
convertToCelsius();

const convertToFahrenheit = function (celsius) {
	let convert = (celsius * (9 / 5) + 32).toFixed(1);
	let isConvert = +convert;
	return isConvert;
};
convertToFahrenheit();
// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
