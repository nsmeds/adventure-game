// import item from './lib/item';
// import player from './lib/player';
// import room from './lib/room';

const item = require('./lib/item');
const player = require('./lib/player');
const room = require('./lib/room');

console.log(room);
console.log(player);
console.log(item);

function buildGame(room) {
    function opposite(direction) {
        if (direction === 'n') {
            return 's';
        } else if (direction === 's') {
            return 'n';
        } else if (direction === 'w') {
            return 'e';
        } else if (direction === 'e') {
            return 'w';
        } else {
            return null;
        };
    };

    function connect(firstRoom, direction, secondRoom) {
        firstRoom[direction] = secondRoom;
        secondRoom[opposite(direction)] = firstRoom;
    };

    connect(room.startRoom, 'n', room.finalRoom);
    connect(room.startRoom, 's', room.storeRoom);
    room.storeRoom.items.push(item);
};

buildGame(room);

console.log(room);

module.exports = {room, item, player}