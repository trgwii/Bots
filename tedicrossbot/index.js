'use strict';

const Telegraf = require('telegraf');

module.exports = token => {
    const bot = new Telegraf(token);

    bot.on('text', ({ reply }) =>
        reply('This bot is not in use.\n' +
            'Visit: https://github.com/Suppen/TediCross\n' +
            'for more info.'));

    bot.startPolling();

    return bot;
};