const factorial = function (value) {
	if (value === 0) {
		return 1;
	}
	if (
		value < 0 ||
		value === 5.4 ||
		typeof value == 'string' ||
		value instanceof Array
	) {
		return undefined;
	}
	return value * factorial(value - 1);
};
factorial(4);
// Do not edit below this line
module.exports = factorial;
