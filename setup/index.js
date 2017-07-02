'use strict';

const readline = require('readline');

const { load, save } = require('../utils/json');
const { validToken } = require('../utils/telegram');

const reader = rl => () => new Promise(resolve => rl.once('line', resolve));

function loadConfig() {
	let config = {};
	try {
		config = load('./config.json');
	} catch (err) {
		config = load('./example.config.json');
	}
	return config;
}

function saveConfig(config) {
	return save('./config.json', config);
}

async function prepareConfig(config) {
	const rl = readline.createInterface({ input: process.stdin });
	const input = reader(rl);
	const { tokens } = config;
	for (const bot in tokens)
		while (!validToken(tokens[bot])) {
			console.log('Enter token for ' + bot);
			tokens[bot] = await input();
		}
	saveConfig(config);
	rl.close();
	if (config.debug) console.log('config file OK');
}

if (require.main === module)
	prepareConfig(loadConfig());

module.exports = { loadConfig, saveConfig, prepareConfig };
