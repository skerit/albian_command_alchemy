/**
 * nw.js background script
 *
 * Copyright 2014-2016, Jelle De Loecker
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2014-2016, Jelle De Loecker
 * @link          
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
var gui = require('nw.gui'),
    Creatures,
    win,
    bg;

// Require alchemy
require('alchemymvc');

// Require the creatures class
Creatures = require('creatures');

// Create the creatures instance
alchemy.creatures = new Creatures();

alchemy.start(function onAlchemyReady() {

	// Do certain things when alchemy is ready
	gui.Window.open('http://127.0.0.1:3000/', function gotWindow(win) {
		win.showDevTools();
	});
});