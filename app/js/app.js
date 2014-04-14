// Seth is our baby

angular.module('sethApp', [
	'ionic',
	'sethApp.controllers',
	'sethApp.services'
	])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/menu.html",
			controller: 'AppCtrl'
		})

		.state('app.about', {
			url: "/search",
			views: {
				'menuContent' :{
					templateUrl: "templates/about-seth.html"
				}
			}
		})
		.state('app.home', {
			url: "/home",
			views: {
				'menuContent' :{
					templateUrl: "templates/home.html",
					controller: 'homeCtrl'
				}
			}
		})

		.state('app.single', {
			url: "/home/:eventId",
			views: {
				'menuContent' :{
					templateUrl: "templates/event.html",
					controller: 'eventCtrl'
				}
			}
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});

