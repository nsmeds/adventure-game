import angular from 'angular';
import {room, item, player} from './game';
import actions from './help';

console.log(player);

const app = angular.module('myApp', []);

app.controller('myGame', ['$scope', function($scope) {
    $scope.choices = actions.allChoices;
    $scope.userMovement = $scope.choices.name;
    $scope.userItem = $scope.choices.name;
    $scope.newText = '';
    $scope.playerHistory = [];
    $scope.playerHistory.push('You are waking up after being unconcious....');
    $scope.playerHistory.push(player.location.desc);
}]);

app.controller('movementController', ['$scope', function($scope) {
    $scope.currentRoom = '';
}]);


export default app;
// module.exports = app;
