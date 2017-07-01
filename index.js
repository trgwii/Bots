'use strict';

require('child_process').spawnSync('node', [ 'setup' ], { stdio: 'inherit' });

const { validToken } = require('./utils/telegram');
const config = require('./config');
const { tokens } = config;

const dubbsBot = validToken(tokens.dubbsBot) &&
	require('./dubbsbot')(tokens.DubbsBot);

const rickAstleyBot = validToken(tokens.rickAstleyBot) &&
	require('./rickastleybot')(tokens.RickAstleyBot);

const roryBot = validToken(tokens.RoryBot) &&
	require('./rorybot')(tokens.RoryBot);

module.exports = { dubbsBot, rickAstleyBot, roryBot };
