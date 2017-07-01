'use strict';

const Telegraf = require('telegraf');


module.exports = token => {
	const bot = new Telegraf(token);

	return bot;
};
