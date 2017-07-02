'use strict';

const Telegraf = require('telegraf');
const { getArgs } = require('../utils/telegram');

const replies = require('./replies');
const { ballCommand } = require('./8ball');
const { infoCommand } = require('./info');

module.exports = token => {
	const bot = new Telegraf(token);

	for (const name in replies)
		bot.command(name, ({ reply }) => reply(replies[name]));

	bot.command('echo', ({ message, reply }) =>
		reply(getArgs(message.text).join(' ')));

	bot.command('info', infoCommand);

	bot.command('8ball', ballCommand);

	bot.startPolling();

	return bot;
};
