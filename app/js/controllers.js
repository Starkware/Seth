angular.module('sethApp.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('homeCtrl', ['$scope', 'Events', function($scope, Events) {
	// Create a Request and bring me the data
	var Request = Events.allEvents().success(function(data){
		$scope.events = data;
	})

}])

.controller('eventCtrl', ['$scope', 'Events', '$stateParams' ,function($scope, Events, $stateParams) {
	// code
	// $scope.singleEvent = Events.getDetail($stateParams.eventId);
	var request = Events.detailEvent($stateParams.eventId).success(function(data){
		$scope.singleEvent = data;
	});
	console.log(Events.detailEvent($stateParams.eventId));
	// var request = Events.getDetail($scope.singleEvent).success(function(data){
	// 	$scope.eventData = data;
	// });

}])
.controller('aboutSethCtrl', ['$scope', '$location', function($scope, $stateParams, $location) {
	// code
}])
