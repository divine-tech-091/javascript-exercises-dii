const add = function (num, para) {
	let isAdd = num + para;
	return isAdd;
};
add();

const subtract = function (num, val) {
	let isSub = num - val;
	return isSub;
};
subtract();

const sum = function (arr) {
	// let arr = [7];
	let sumArr = arr.reduce((acc, val) => {
		return acc + val;
	}, 0);
	return sumArr;
};
sum([]);

const multiply = function (elements) {
	let num = elements.reduce((acc, num) => {
		return acc * num;
	});
	return num;
};
multiply([2, 4]);

const power = function (val, num) {
	let exponent = Math.pow(val, num);
	return exponent;
};
power(4, 3);

const factorial = function (val) {
	if (val === 0) {
		return 1;
	}
	return val * factorial(val - 1);
};

factorial(0);

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
