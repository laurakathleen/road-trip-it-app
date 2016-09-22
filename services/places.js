angular.module('roadTripIt')
	.service('PlaceService', PlaceService);

	PlaceService.$inject = ['$q'];
	function PlaceService($q) {
		console.log('inside place service');
		var self = this;
		self.places = [
			'San Francisco': {
				type: 'beach',
				field: 'city'
			},
			'Denver': {
				type: 'mountain',
				field: 'city'
			},
			'Tahoe': {
				type: 'mountain',
				field: 'nature'
			}
		];
		self.queryAllItems = function(){
			return self.places;
		};
	}