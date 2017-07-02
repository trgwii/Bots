'use strict';

const { pick } = require('../../utils/arr');
const answers = require('./answers');

const ball = () => pick(answers);

const ballCommand = ({ reply }) => reply(ball());

module.exports = { ball, ballCommand };
