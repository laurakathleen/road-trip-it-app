angular.module('roadTripIt')
  .controller('PlacesController', PlacesController);

PlacesController.$inject = ['PlaceService', '$routeParams'];
function PlacesController(PlaceService, $routeParams){
	var vm = this;
	vm.places = ReceiptService.queryAllItems();
}
