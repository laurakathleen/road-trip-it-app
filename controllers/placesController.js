angular.module('roadTripIt')
  .controller('PlacesController', PlacesController);

    console.log('places controller!')

PlacesController.$inject = ['PlaceService', '$routeParams'];
function PlacesController(PlaceService, $routeParams){
	var vm = this;
	// vm.getPlaces = function(clicked){
	// 	if (mountain == true && camping == true){
	// 		return places.mountainCamping;
	// 	} else if (mountain == true && city == true){
	// 		return places.mountainCities;
	// 	} else if (desert == true && camping == true){
	// 		return places.desertCamping;
	// 	} else if (desert == true && city == true){
	// 		return places.desertCities;
	// 	} else if (beach == true && camping == true){
	// 		return places.beachCamping;
	// 	} else if (beach == true && city == true){
	// 		return places.beachCities;
	// 	} else if (plains == true && camping == true){
	// 		return places.plainsCamping;
	// 	} else {
	// 		return places.plainsCities;
	// 	}
	// }
	vm.places = PlaceService.queryAllItems();
}
