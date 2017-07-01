'use strict';

const fs = require('fs');

const load = path => JSON.parse(fs.readFileSync(path));

const save = (path, data) =>
	fs.writeFileSync(path, JSON.stringify(data, null, '\t'));

module.exports = { load, save };
