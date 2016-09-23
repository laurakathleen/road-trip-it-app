angular.module('roadTripIt')
  .controller('PlacesController', PlacesController);

    console.log('places controller!')

PlacesController.$inject = ['PlaceService', '$routeParams'];
function PlacesController(PlaceService, $routeParams){
	var vm = this;
	// var mountain = document.getElementById('mountain');
	// var desert = getElementById('desert');
	// var beach = getElementById('beach');
	// var plains = getElementById('plains');
	// var camping = document.getElementById('camping');
	// var city = getElementById('city');

	// vm.getPlaces = function(){
	// 	if (angular.element('#mountain').hasClass('clicked') && angular.element('#camping').hasClass('clicked')){
	// 		console.log(places.mountainCamping);
	// 	}
	// }
	
	// vm.getPlaces = function() {
	// 	if (selected[0] === "mountains"){
	// 		results = PlaceService.places.mountainCamping;
	// 		return results;
	// 		console.log(results);
	// 	}
	// }

	// vm.getPlaces = function(){
	// 	if (mountain.hasClass('clicked') && camping.hasClass('clicked')){
	// 		var results = places.mountainCamping;
	// 	} else if (mountain == true && city == true){
	// 		results = places.mountainCities;
	// 	} else if (desert == true && camping == true){
	// 		results = places.desertCamping;
	// 	} else if (desert == true && city == true){
	// 		results = places.desertCities;
	// 	} else if (beach == true && camping == true){
	// 		results = places.beachCamping;
	// 	} else if (beach == true && city == true){
	// 		results = places.beachCities;
	// 	} else if (plains == true && camping == true){
	// 		results = places.plainsCamping;
	// 	} else {
	// 		results = places.plainsCities;
	// 	}
	// 	return results;
	// }

	// vm.places = PlaceService.queryAllItems();

	vm.mountainCamping = PlaceService.queryMtnCamp();

}
