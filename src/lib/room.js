class Room {
    constructor(obj) {
        Object.keys(obj).forEach((element) => {
            this[element] = obj[element];
        }, this);
        this.items = [];
        this.north = this.south = this.east = this.west = null;
    }
    move(direction) {
        let response = {room: this[direction]};
        if(!this[direction]) {
            response.text = `Sorry, you can\'t go ${direction}!`;
            return response;
        } else {
            response.text = this[direction].desc;
            if (this[direction].items.length) {
                response.text += `\n You find a ${this[direction].items[0].name}.`;
            };
            return response;
        };
    }
};

Room.startRoom = new Room({
    name: 'Starting Room',
    desc: 'You are currently located in a a dimly lit room. There is a door to the north and to the south.'
});

Room.storeRoom = new Room({
    name: 'Store Room',
    desc: 'You are in a dusty room with lots of boxes strewn around. The only door is to the north.'
});

Room.finalRoom = new Room({
    name: 'Final Room',
    desc: 'Behold, Godzilla sits before you! The only escape is the door to the south.'
});

export default Room;
// module.exports = Room;