'use strict';

require('child_process').spawnSync('node', [ 'setup' ], { stdio: 'inherit' });

const { validToken } = require('./utils/telegram');
const config = require('./config');
const { tokens } = config;

const dubbsBot = validToken(tokens.DubbsBot) &&
	require('./dubbsbot')(tokens.DubbsBot);

const rickAstleyBot = validToken(tokens.RickAstleyBot) &&
	require('./rickastleybot')(tokens.RickAstleyBot);

const roryBot = validToken(tokens.RoryBot) &&
	require('./rorybot')(tokens.RoryBot);

const tedicrossBot = validToken(tokens.TediCrossBot) &&
	require('./tedicrossbot')(tokens.TediCrossBot);

const r9kCipherBot = validToken(tokens.r9kCipherBot) &&
	require('./r9kcipherbot/bot')(tokens.r9kCipherBot);

module.exports = { dubbsBot, rickAstleyBot, roryBot, tedicrossBot, r9kCipherBot };
