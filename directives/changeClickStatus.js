angular.module('roadTripIt')
	.directive('changeClickStatus', changeClickStatus);

	function changeClickStatus(){
		var directive = {
			restrict: 'E',
			scope: {
				class: '@'
			},
			replace: true,
			link: function ($scope, element, attr){
			var vm = this;
			vm.getPlaces = function(class){
				if (angular.element('#mountain').hasClass('clicked') && angular.element('#camping').hasClass('clicked')){
			console.log(places.mountainCamping);
			}
		}	
	}
