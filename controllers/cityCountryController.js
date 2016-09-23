angular.module('roadTripIt')
  .controller('CityCountryController', CityCountryController);

    console.log('city-country controller!')

    CityCountryController.$inject = ['PlaceService', '$routeParams'];
	function CityCountryController(PlaceService, $routeParams){
	console.log('city-country controller function working');
}