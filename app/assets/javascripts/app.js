
var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/AddNewOrder', {
				templateUrl: '/assets/add_order.html',
				controller: 'AddOrderController'
			}).when('/ShowOrders', {
				templateUrl: '/assets/show_orders.html',
				controller: 'ShowOrdersController'
			}).otherwise({
				redirectTo: '/AddNewOrder'
			});
	}]);
sampleApp.controller('AddOrderController', function($scope){
	$scope.message = 'This is Add new order screen';
});
sampleApp.controller('ShowOrdersController', function($scope){
	$scope.message = 'This is Show Orders screen';
});