angular.module('todoApp', [])
	.controller('todoController', ['$scope', function($scope) {
		$scope.todos = [
			{ name : 'First todo', done : false},
			{ name : 'Second todo', done : true}
		];
  }]);