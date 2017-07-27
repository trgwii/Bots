'use strict';

const { join } = require('path');
const fs = require('fs');

const encodeCipher = JSON.parse(fs.readFileSync(join(__dirname, 'cipher.json'), 'utf8'));

const decodeCipher = (obj => {
	const result = {};
	for (const key in obj) {
		result[obj[key]] = key;
	}
	return result;
})(encodeCipher);

const generate = cipher => str => {
	str = str.toLowerCase();
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let subst = str[i];
		for (const key in cipher) {
			if (key === str.substr(i, key.length)) {
				i += key.length - 1;
				subst = cipher[key];
			}
		}
		result += subst;
	}
	return result;
};

const encode = generate(encodeCipher);

const decode = generate(decodeCipher);

module.exports = { encode, decode };
