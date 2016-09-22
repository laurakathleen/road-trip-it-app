angular.module('roadTripIt', ['ngRoute'])
	.config(config)
	// .controller('TerrainController', TerrainController)
	// .controller('CityCountryController', CityCountryController)
	// .controller('PlacesController', PlacesController);

	console.log('sanity check for app.js');

	config.$inject = ['$routeProvider', '$locationProvider'];
	function config(   $routeProvider,   $locationProvider   ) {
	  $routeProvider
	    .when('/', {
	      templateUrl: '/templates/terrain.html',
	      controller: 'TerrainController',
	      controllerAs: 'terrainCtrl'        
	    })
	    .when('/cit-country',{
	    	templateUrl: '/templates/city-country.html',
	    	controller: 'CityCountryController',
	    	controllerAs: 'cityCountryCtrl'
	    })
	    .when('/places',{
	    	templateUrl: '/templates/places.html',
	    	controller: 'PlacesController',
	    	controllerAs: 'placesCtrl'
	    })
	    .otherwise({
	    	redirectTo: '/'
	    });

	    $locationProvider.html5Mode({
   	 		enabled: true,
    		requireBase: false
  		});
	};
