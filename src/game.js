import item from './lib/item';
import player from './lib/player';
import room from './lib/room';

// const item = require('./lib/item');
// const player = require('./lib/player');
// const room = require('./lib/room');

function buildGame(rooms, players, items) {
    function opposite(direction) {
        if (direction === 'north') {
            return 'south';
        } else if (direction === 'south') {
            return 'north';
        } else if (direction === 'west') {
            return 'east';
        } else if (direction === 'east') {
            return 'west';
        } else {
            return null;
        };
    };

    function connect(firstRoom, direction, secondRoom) {
        firstRoom[direction] = secondRoom;
        secondRoom[opposite(direction)] = firstRoom;
    };

    connect(rooms.startRoom, 'north', rooms.finalRoom);
    connect(rooms.startRoom, 'south', rooms.storeRoom);
    rooms.storeRoom.items.push(items);
    // console.log('storeRoom items', rooms.storeRoom.items);
    items.location = room.storeRoom;
    players.location = room.startRoom;
};

buildGame(room, player, item);

// console.log(room);
// console.log('player', player);
// console.log(item);

// module.exports = {room, item, player};

export {room, item, player};