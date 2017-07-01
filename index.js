'use strict';

const config = require('./config');

const dubbsBot = require('./dubbsbot')(config.DubbsBot);
const rickAstleyBot = require('./rickastleybot')(config.RickAstleyBot);
// const roryBot = require('./rorybot')(config.RoryBot);

module.exports = { dubbsBot, rickAstleyBot };
