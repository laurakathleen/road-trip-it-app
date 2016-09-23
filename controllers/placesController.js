angular.module('roadTripIt')
  .controller('PlacesController', PlacesController);

    console.log('places controller!')

PlacesController.$inject = ['PlaceService', '$routeParams', '$location'];
function PlacesController(PlaceService, $routeParams, $location){
	var vm = this;

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

	//use this one:
	 vm.places = PlaceService.queryAllItems();

	//vm.mountainCamping = PlaceService.queryMtnCamp();

	//vm.mountainCamping = PlaceService.getMountainCamping();
}
