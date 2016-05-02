/**
 * The Static Controller class
 *
 * @constructor
 * @extends       alchemy.classes.AppController
 *
 * @author        Jelle De Loecker   <jelle@develry.be>
 * @since         0.1.0
 * @version       0.1.0
 */
var Static = Function.inherits('AppController', function StaticController(conduit, options) {
	StaticController.super.call(this, conduit, options);
});

/**
 * The home action
 *
 * @author        Jelle De Loecker   <jelle@develry.be>
 * @since         0.1.0
 * @version       0.1.0
 *
 * @param   {Conduit}   conduit
 */
Static.setMethod(function home(conduit) {

	var that = this,
	    creatures = alchemy.creatures;

	creatures.getWorldName(function gotWorldName(err, name) {

		if (err) {
			return conduit.error(err);
		}

		that.set('world_name', name);

		// Render a specific view
		that.render('static/home');
	});
});