const fibonacci = function (value) {
	// check the argument is not a number
	// make sure i worked with number throughout
	// the function.
	if (!isNaN(value)) {
		value = Number(value);
	}
	if (value < 0) {
		return 'OOPS';
	}

	if (value === 0) {
		return 0;
	}
	if (value <= 2) {
		return 1;
	}
	// recursive function for returning large numbers
	return fibonacci(value - 1) + fibonacci(value - 2);
};
fibonacci('5');

// Do not edit below this line
module.exports = fibonacci;
