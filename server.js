/**
 * Alchemy: a node.js framework
 * Copyright 2014-2016, Jelle De Loecker
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2014-2016, Jelle De Loecker
 * @link          
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
process.on('uncaughtException', function onException(error) {
	console.log('Error:', error);
});

// Require alchemy
require('alchemymvc');

alchemy.start(function onAlchemyReady() {
	console.log('Alchemy is ready!');
});