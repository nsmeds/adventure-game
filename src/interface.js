export default function interaction($scope) {
    $scope.progress = [
        {
            text: 'You are in an empty room. There are two adjacent rooms - one contains a weapon and one contains a monster. What do you do?'
        }
    ];
    $scope.processInput = function(input) {
        let entry = {};
        entry.text = $scope.text || '';
        if(input.keyCode === 13) {
            parse(entry);
            $scope.text = '';
        }
    };

    function parse(entry) {
        if (entry.text.toLowerCase() === 'test') {
            $scope.progress.push('You have made progress.');
        }
    }
}

