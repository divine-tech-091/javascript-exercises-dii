const findTheOldest = function (people) {
	let currentYear = new Date().getFullYear();

	let getAge = people.reduce((oldest, current) => {
		let oldAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
		let currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;

		return oldAge < currentAge ? current : oldest;
	});
	return getAge;
};
const people = [
	{
		name: 'Carly',
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: 'Ray',
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: 'Jane',
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
