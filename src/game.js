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
    
    // the following four lines will be functional once multiple items are implemented
    rooms.storeRoom.items.push(items[0]);
    rooms.newRoom.items.push(items[1]);
    items[0].location = room.storeRoom;
    items[1].location = room.newRoom;

    // the following two lines will be deleted once multiple items are implemented
    rooms.storeRoom.items.push(items);
    items.location = room.storeRoom;
    
    players.location = room.startRoom;
    // players.status = player.status;
};

buildGame(room, player, item);

// console.log(room);
// console.log('player', player);
// console.log(item);

// module.exports = {room, item, player};

export {room, item, player};