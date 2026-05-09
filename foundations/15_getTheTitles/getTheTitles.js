const getTheTitles = function () {
	const books = [
		{
			title: 'Book',
			author: 'Name',
		},
		{
			title: 'Book2',
			author: 'Name2',
		},
	];
	let arr = [];
	const isBook = books.filter((element) => {
		if (element !== element.title) {
			arr.push(element.title);
		}
	});
	return arr;
};
getTheTitles();

// Do not edit below this line
module.exports = getTheTitles;
