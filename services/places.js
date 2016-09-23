angular.module('roadTripIt')
	.service('PlaceService', PlaceService);

	PlaceService.$inject = [];
	function PlaceService() {
		console.log('inside place service');
		var self = this;

		// self.places = {
		// 	'mountainCamping': ['Estes Park, Colorado', 'Acadia National Park, Maine', 'White Mountain National Forest, New Hampshire', 'Green Mountain National Forest, Vermont', 'Shenandoah National Park, Virginia', 'Minnewaska State Park Preserve, New York', 'Pine Grove Furnace State Park, Pennsylvania', 'Badlands National Park, South Dakota', 'Denali National Park, Alaska', 'Glacier Bay National Park, Alaska', 'Yosemite National Park, California', 'Sequoia and Kings Canyon National Parks, California', 'Olympic National Park, Washington', 'Gunnison National Forest, Colorado', 'Glacier National Park, Montana', 'Grand Teton National Park, Wyoming', 'Capitol Reef National Park, Utah', 'Sawtooth National Forest, Idaho', 'Great Smoky Mountains National Park, Tennessee'],
		// 	'beachCamping': ['Assateague Island National Seashore, Maryland', 'Jalama Beach County Park, California', 'Pfeiffer Big Sur State Park, California', 'Long Key State Park, Florida', 'Myrtle Beach Travel Park, South Carolina', 'Padre Island National Seashore, Texas', 'Little Tybee Island, Georgia', 'Olympic National Park, Washington', 'Padre Island National Seashore, Texas', "Wai'anapanapa State Park, Hawaii", 'Hammocks Beach State Park, North Carolina', 'Horseneck Beach State Reservation, Massachusetts', 'Anastasia State Park, Florida', 'Siuslaw National Forest, Oregon', 'Ninilchik State Recreation Area, Alaska'],
		// 	'desertCamping': ['Joshua Tree National Park, California', 'Death Valley National Park, California', 'Moab, Utah', 'Lava Beds National Monument, California', 'Mojave National Preserve, California', 'Valley of Fire State Park, Nevada', 'Owens Valley, California', 'Cathedral Gorge State Park, Nevada', 'Mojave National Preserve, California', 'Black Rock Desert Recreation Area, Nevada', 'Lost Dutchman State Park, Arizona', 'Ute Lake State Park, New Mexico', 'Abiquiu Lake, New Mexico'],
		// 	'mountainCities': ['Denver, Colorado', 'Reno, Nevada', 'Boulder, Colorado', ],
		// 	'desertCities': ['Flagstaff, Arizona', 'Palm Springs, California', 'Phoenix, Arizona', 'Las Vegas, Nevada', 'Santa Fe, New Mexico', 'Scottsdale, Arizona', 'Tucson, Arizona'],
		// 	'beachCities': ['Miami, Florida', 'San Diego, California', 'Malibu, California', 'Santa Cruz, California', 'New York City, New York', 'San Francisco, California', 'Traverse City, Michigan', 'Key West, Florida', 'Chincoteague, Virginia', 'Newport, Rhode Island', 'York Beach, Maine', 'Cape May, New Jersey'],
		// };

		// self.mountainCamping = {
		// 	'id': 0,
		// 	'places': 'Estes Park, Colorado'
		// };
		

		self.places = [
				{ 
				name: 'San Diego',
				type: 'beach',
				field: 'city'
			},
			{
				name: 'Francis Bay Campsite',
				type: 'beach',
				field: 'camping',
			},
			{
				name: 'Denver',
				type: 'mountain',
				field: 'city'
			},
			{
				name: 'Tahoe',
				type: 'mountain',
				field: 'camping'
			},
			{
				name: 'Palm Springs',
				type: 'desert',
				field: 'city'
			},
			{
				name: 'Mesquite Springs Campground',
				type: 'desert',
				field: 'camping',
			},
			{
				name: 'Omaha',
				type: 'plain',
				field: 'city'
			},
			{
				name: 'Lake MacBride State Park',
				type:'plain',
				field: 'camping'
			}
		];
		self.queryAllItems = function(){
			return self.places;
		};
	}