'use strict';

const Telegraf = require('telegraf');

const id = require('./id');
const url = 'https://youtu.be/' + id;
// const embedUrl = 'https://www.youtube.com/embed/' + id;
const thumbUrl = 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg';

module.exports = token => {
	const bot = new Telegraf(token, { username: 'RickAstleyBot' });

	bot.command('rick', ({ reply }) => reply(url));

	bot.on('inline_query', ({ answerInlineQuery }) =>
		answerInlineQuery([ {
			id,
			input_message_content: { message_text: url },
			mime_type: 'text/html',
			thumb_url: thumbUrl,
			title: 'Never Gonna Give You Up',
			type: 'video',
			video_url: url
		} ]));

	bot.startPolling();

	return bot;
};
