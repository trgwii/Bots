'use strict';

const Telegraf = require('telegraf');

const checkem = require('./checkem');

module.exports = token => {
	const bot = new Telegraf(token);

	bot.on('message', ({ message, reply }) => {
		const id = message.message_id;
		const gets = checkem(id);
		if (gets > 2) {
			let response = '';
			if (gets > 5)
				response = 'Holy shit, your ID is: *' + id + '*';
			else if (gets === 5)
				response = '*QUINTS MOTHAFUCKA!!!*';
			else if (gets === 4)
				response = 'QUADS *GET*!';
			else if (gets === 3)
				response = 'Trips checked!';
			reply(response, {
				parse_mode: 'Markdown',
				reply_to_message_id: id
			});
		}
	});

	bot.startPolling();

	return bot;
};
