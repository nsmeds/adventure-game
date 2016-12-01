// import item from './lib/item';
// import player from './lib/player';
// import room from './lib/room';

const item = require('./lib/item');
const player = require('./lib/player');
const room = require('./lib/room');

console.log(room);
console.log(player);
console.log(item);

function buildGame(rooms, players, items) {
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

    connect(rooms.startRoom, 'n', rooms.finalRoom);
    connect(rooms.startRoom, 's', rooms.storeRoom);
    rooms.storeRoom.items.push(items);
    players.location = room.startRoom;
};

buildGame(room, player, item);

console.log(room);

module.exports = {room, item, player};