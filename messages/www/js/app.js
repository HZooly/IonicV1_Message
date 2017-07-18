var app = angular.module('messages', ['ionic'])

app.config(config)
config.$inject = ['$stateProvider', '$urlRouterProvider']

function config($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home/home.html',
			controller: 'HomeController'
		})
	$urlRouterProvider.otherwise('/')
}

app.run(run)
run.$inject = ['$ionicPlatform']

function run($ionicPlatform) {
	$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar)
				StatusBar.styleDefault();
	})
}
