import angular from 'angular';
import {room, item, player} from './game';

console.log(player);

const app = angular.module('myApp', []);

app.controller('myGame', ['$scope', function($scope) {
    $scope.userAction = 'wha';
    $scope.newText = $scope.userAction;
    $scope.playerHistory = [];
}]);

export default app;
// module.exports = app;
