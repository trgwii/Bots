'use strict';

const { EOL } = require('os');
const { capitalize } = require('../../utils/str');
const { getArgs } = require('../../utils/telegram');

const info = object => {
	const result = [];
	Object.keys(object).forEach(key =>
		result.push(capitalize(key.replace(/_/g, ' ')) +
			': ' + object[key]));
	return result.join(EOL);
};

const infoCommand = ({ message, reply, telegram }) => {
	const [ type ] = getArgs(message.text);
	if (!type || type === 'user')
		reply(info(message.from));
	if (!type || type === 'chat')
		reply(info(message.chat));
	if (!type || type === 'bot')
		telegram.getMe().then(botInfo =>
			reply(info(botInfo)));
};

module.exports = { info, infoCommand };
