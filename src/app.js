import angular from 'angular';
import {room, item, player} from './game';
import actions from './help';

// console.log(player);

const app = angular.module('myApp', []);

app.controller('myGame', ['$scope', function($scope) {
    $scope.player = player;
    $scope.choices = actions.allChoices;
    $scope.userMovement = $scope.choices.name;
    $scope.userItem = $scope.choices.name;
    $scope.newText = '';
    $scope.playerHistory = [];
    $scope.playerHistory.push('You are waking up after being unconcious....');
    $scope.playerHistory.push(player.location.desc);
    $scope.room = room;
    $scope.item = item;

}]);

app.controller('movementController', ['$scope', function($scope) {
    $scope.currentRoom = '';

    $scope.buttonClicked = function(cmd){
        // console.log(cmd);
        // console.log(player);
        // console.log($scope.playerHistory);
        $scope.playerHistory.push($scope.player.action(cmd));
    };

}]);


export default app;
// module.exports = app;
