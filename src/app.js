import angular from 'angular';
import {room, item, player} from './game';
import actions from './help';
import './main.css';

// console.log(player);

const app = angular.module('myApp', ['ng']);

app.controller('myGame', ['$scope', function($scope) {
    $scope.player = player;
    $scope.choices = actions.allChoices;
    $scope.userMovement = $scope.choices.name;
    $scope.userItem = $scope.choices.name;
    $scope.newText = '';
    $scope.playerHistory = [];
    $scope.playerHistory.push('You are waking up after being unconscious....');
    $scope.playerHistory.push(player.location.desc);
    $scope.room = room;
    $scope.item = item;

}]);

app.controller('movementController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.currentRoom = '';
    $scope.scrollDown = function() {
        $location.hash('bottom');
        $anchorScroll();
    };
    $scope.buttonClicked = function(cmd){
        $scope.playerHistory.push($scope.player.action(cmd));
        $scope.scrollDown();
    };

}]);

app.controller('itemController', ['$scope', function($scope) {
    itemName = $scope.item.name;
    $scope.buttonClicked = function(cmd){
        $scope.playerHistory.push($scope.player.action(cmd + ' ' + itemName));
    }
}])

export default app;
// module.exports = app;
