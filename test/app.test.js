const {assert} = chai;

describe('game controller', () => {
    beforeEach(angular.mock.module('myApp'));

    const mockRoomOne = {
        n: null,
        items: []
    };

    const mockRoomTwo = {
        s: null,
        items: [{name:'baseball bat', location: null}]
    };

    const mockItem = [{name:'baseball bat', location: mockRoomTwo}];

    const mockPlayer = {
        action: function(string) {
            console.log(string);
        }
    };

    mockRoomOne.n = mockRoomTwo;
    mockRoomTwo.s = mockRoomOne;
    mockRoomTwo.items.push(mockItem);

    let $controller, $scope, $location, $anchorScroll;
    beforeEach(angular.mock.inject(function($rootScope, _$anchorScroll_, _$controller_, _$location_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        $anchorScroll = _$anchorScroll_;
    }));

    it('Checks initial player history is empty', () => {
        $controller('myGame', {$scope, $location});
        assert(Array.isArray($scope.playerHistory),'should initially be empty');
        assert.equal($scope.playerHistory.length, 2);
        assert($scope.room, 'is a function');
    });

    it('Checks current room and button click functionality', () => {
        $controller('movementController', {$scope});
        assert.equal($scope.currentRoom, '');
        $scope.playerHistory = [];
        $scope.scrollDown = function() {return true};
        $scope.player = mockPlayer;
        $scope.buttonClicked('Move South');
        assert.equal($scope.playerHistory.length, 1);
    });

    // it('Checks controller itemController', () => {
    //     $controller('itemController', {$scope});
    //     $scope.buttonClicked('take');
    // });
});