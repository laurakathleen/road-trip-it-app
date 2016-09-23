angular.module('roadTripIt')
  .controller('TerrainController', TerrainController);

  console.log('terrain controller!')

  TerrainController.$inject = ['PlaceService', '$routeParams'];
	function TerrainController(PlaceService, $routeParams){
	var vm = this;
	console.log('terrain controller function working');
}