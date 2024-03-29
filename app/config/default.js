/**
 * Default configuration
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright   Copyright 2013-2015
 * @since       0.1.0
 * @license     http://www.opensource.org/licenses/mit-license.php MIT License
 */
module.exports = {

	// Enable caching
	cache: true,

	// Gzip/deflate response compression
	compression: true,

	// Use cookies
	cookies: 'cookie_key_or_false_to_disable',

	// Disable debugging
	debug: false,

	// Decode json, multipart, urlencode in body
	decoding: true,

	// Enable hawkejs on the client side
	hawkejs_client: true,

	// Don't allow access to the info page
	info_page: false,

	// Extra import paths
	less_import_paths: false,

	// Set the debug level
	log_level: 4,

	// Enable debug stack trace (slow)
	log_trace: false,

	// Enable debugTrace for log.debug calls
	log_trace_debug: true,

	// Enable debugTrace for log.error calls
	log_trace_error: true,

	// Listen to logTrace by default
	log_trace_info: null,
	log_trace_warn: null,
	log_trace_verbose: null,

	// How long query results are cached (falsy to disable)
	model_query_cache_duration: '60 minutes',

	// How many assoc data queries are allowed to run at the same time
	model_assoc_parallel_limit: 8,

	// Minify CSS
	minify_css: true,

	// Minify javascript files
	minify_js: true,

	// The port to run the server on
	port: 3000,

	// Do an extensive and expensive search for modules
	search_for_modules: false,

	// Kill the process when a file changes
	kill_on_file_change: false,

	// Override kill extensions
	// kill_extensions: ['js'],

	// Type of sessions to use: 'server', 'cookie', 'persistent'
	sessions: 'cookie',

	// The session key (for server & persistent sessions)
	session_key: 'session_key',

	// The length of the session
	session_length: '20 minutes',

	// Detect when this node server is too busy
	// 70ms is the default, and would result in a 200ms latency lag
	toobusy: 70,

	// Enable websockets
	websockets: false
};