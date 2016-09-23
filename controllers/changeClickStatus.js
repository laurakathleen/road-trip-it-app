angular.module('roadTripIt')
  .controller('changeClickStatusController', changeClickStatusController);

    console.log('changeClickStatus controller!');

    changeClickStatusController.$inject = ['PlaceService', '$routeParams'];
    function changeClickStatusController(PlaceService, $routeParams){
	var vm = this;
	var vm.selected = [];
	vm.changeClickStatus = function(element){
		// if(vm.class==='unclicked'){
		// 	vm.class="clicked";
		// } else {
		// 	vm.class="unclicked";
		// }
		if ('#mountain'){
			selected[0] = 'mountains';
			return selected;
			console.log(selected);
		}

		console.log('running changeClickStatus on', element, 'now');
	}

