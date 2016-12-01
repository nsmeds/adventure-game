import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('myGame', ['$scope', function($scope) {
    $scope.userAction = 'wha';
    $scope.newText = $scope.userAction;
    $scope.playerHistory = [];
}]);

export default app;
