import angular from 'angular';
import {room, item, player} from './game';
import actions from './help';
import './main.css';

const app = angular.module('myApp', ['ng']);

app.controller('myGame', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
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
    $scope.scrollDown = function() {
        $location.hash('bottom');
        $anchorScroll();
    };

}]);

app.controller('movementController', ['$scope', function($scope) {
    $scope.currentRoom = '';
    $scope.buttonClicked = function(cmd){
        // console.log('$scope.player.location.items', $scope.player.location.items);
        $scope.playerHistory.push($scope.player.action(cmd));
        $scope.scrollDown();
    };

}]);

app.controller('itemController', ['$scope', function($scope) {
    if ($scope.player.location.items.length) {
        let itemName = $scope.player.location.items[0].name;
        $scope.buttonClicked = function(cmd){
            $scope.playerHistory.push($scope.player.action(cmd + ' ' + itemName));
            // console.log($scope.player.inventory);
            $scope.scrollDown();
        };
    }
}]);

export default app;
// module.exports = app;
