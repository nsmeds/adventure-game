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
    $scope.playerHistory.push('You are waking up after being unconscious ...');
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
        $scope.playerHistory.push($scope.player.action({command: 'go', direction: cmd}));
        $scope.scrollDown();
        // console.log('player after moving', $scope.player);
        // console.log('items in room', $scope.player.location.items);
    };

}]);

app.controller('itemController', ['$scope', function($scope) {
    // console.log('the items in this room', $scope.player.location.items);

    $scope.buttonClicked = function(cmd){
        let itemName;
        if (cmd === 'take') {
            itemName = $scope.player.location.items.length ? $scope.player.location.items[0] : {name: 'nothing'};
        } else {
            itemName = $scope.player.inventory.length ? $scope.player.inventory[0] : {name: 'nothing'};
        };
        $scope.playerHistory.push($scope.player.action({command: cmd, item: itemName}));
        $scope.scrollDown();
    };
}]);

export default app;
