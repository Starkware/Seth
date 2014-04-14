'use strict';

angular.module('sethApp.services', []).

factory('Events', function($http) {
	return {
		 allEvents: function ()	{
			return $http({
				// url: 'http://50.112.197.183:6543/missions',
				url: 'http://54.203.59.89:6543/missions',
				method: 'GET'
			});
		},
		 detailEvent: function (eventId) {
			return $http({
				// url: 'http://50.112.197.183:6543/missions/'+eventId,
				url: 'http://54.203.59.89:6543/missions/'+eventId,
				method: 'GET'
			});
		}

	}
})
// API
// 50.112.197.183:6543/missions
// 50.112.197.183:6543/missions/{id}