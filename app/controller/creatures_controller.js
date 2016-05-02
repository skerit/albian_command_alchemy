/**
 * The Creatures Controller class
 *
 * @constructor
 * @extends       alchemy.classes.AppController
 *
 * @author        Jelle De Loecker   <jelle@develry.be>
 * @since         0.1.0
 * @version       0.1.0
 */
var Creatures = Function.inherits('AppController', function CreaturesController(conduit, options) {
	CreaturesController.super.call(this, conduit, options);
});

/**
 * The index action
 *
 * @author        Jelle De Loecker   <jelle@develry.be>
 * @since         0.1.0
 * @version       0.1.0
 *
 * @param   {Conduit}   conduit
 */
Creatures.setMethod(function index(conduit) {

	var that = this,
	    creatures = alchemy.creatures;

	creatures.getCreatures(function gotCreatures(err, creatures) {

		if (err) {
			return conduit.error(err);
		}

		that.set('creatures', creatures);

		// Render a specific view
		that.render('creatures/index');
	});
});