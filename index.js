'use strict';

const config = require('./config');
const { tokens } = config;

const dubbsBot = require('./dubbsbot')(tokens.DubbsBot);
const rickAstleyBot = require('./rickastleybot')(tokens.RickAstleyBot);
// const roryBot = require('./rorybot')(tokens.RoryBot);

module.exports = { dubbsBot, rickAstleyBot };
