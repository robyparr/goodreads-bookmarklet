(function() {
	var candidates = document.querySelectorAll('li b');

	var isbn = Array.from(candidates)
		.filter(candidate => candidate.innerHTML === 'ISBN-13:')
		.map(candidate => candidate.parentNode)
		.map(parentNode => parentNode.innerText.match(/\d+[-]\d+/)[0])[0];

	if (isbn == null) {
		isbn = Array.from(candidates)
			.filter(candidate => candidate.innerHTML === 'ASIN:')
			.map(candidate => candidate.parentNode)
			.map(parentNode => parentNode.innerText.match(/ASIN: (\w+)/))[0][1];
	}

	window.open(`https://www.goodreads.com/search?q=${isbn}`);
})();