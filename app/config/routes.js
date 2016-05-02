// Create route with name "Home" that will execute the "home" method of the "Static" controller
Router.get('Home', '/', 'Static#home');
Router.get('Creatures#index', '/creatures');

// Also allowed:
//Router.get('Static#home', '/');