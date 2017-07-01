'use strict';

const validToken = token => token !== '<TOKEN>' && token.trim() !== '';

module.exports = {
	validToken
};
