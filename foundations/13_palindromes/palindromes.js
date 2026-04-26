const palindromes = function (isString) {
	let ConvertStr = isString.toLowerCase().replace(/[^a-z0-9]/g, '');

	let splitStr = ConvertStr.split('').reverse().join('');

	let crossCheck = ConvertStr === splitStr;
	return crossCheck;
};
palindromes('');

// Do not edit below this line
module.exports = palindromes;
