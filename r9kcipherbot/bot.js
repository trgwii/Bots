'use strict';

const Telegraf = require('telegraf');
const { encode, decode } = require('.');

const bot = new Telegraf('436781286:AAG27D5JxP7MtpkKI4eKQLUJ8UxiG2EsB68', { username: 'r9kCipherBot' });
let id = 1;

bot.command('encode', ({ message, reply }) =>
	reply(encode(message.text.split(' ').slice(1).join(' '))));

bot.command('decode', ({ message, reply }) =>
	reply(decode(message.text.split(' ').slice(1).join(' '))));

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
	if (!inlineQuery.query)
		return;
	const encoded = encode(inlineQuery.query);
	const decoded = decode(inlineQuery.query);
	return answerInlineQuery([
		{
			type: 'article',
			id: String(id++),
			title: 'Encode',
			input_message_content: { message_text: encoded },
			description: encoded
		},
		{
			type: 'article',
			id: String(id++),
			title: 'Decode',
			input_message_content: { message_text: decoded },
			description: decoded
		}
	], { cache_time: 0 })
});

bot.startPolling();
