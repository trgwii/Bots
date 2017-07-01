'use strict';

const checkem = n => {
	n = String(n).split('').reverse();
	const [ last ] = n;
	let count = 0;
	for (const i of n)
		if (i === last)
			count++;
		else
			break;
	return count;
};

module.exports = checkem;
