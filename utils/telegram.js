'use strict';

const getArgs = text => text.split(/\s+/).slice(1);

const validToken = token => token !== '<TOKEN>' && token.trim() !== '';

module.exports = {
	getArgs,
	validToken
};
