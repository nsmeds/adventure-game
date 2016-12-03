
const thePlayer = {
    inventory: [],
    location: {},

    action(actions){
        let message = '';
        let theAction = actions.command;
        let item = actions.item;
        let direction = actions.direction;
        console.log('the command:', theAction);
        console.log('the item is:', item);
        console.log('the direction is:', direction);

        console.log('The Action is', theAction);

        if (theAction === 'take') {
            let itemName = item.name;
            if (itemName === 'nothing') {
                message = 'There is nothing to take in here, IDIOT!';
            } else {
                this.inventory.push(item);
                let itemIdx = this.location.items.indexOf(item);
                this.location.items.splice(itemIdx, 1);
                message = 'You added a ' + itemName + ' to your inventory.';
            };
        } else if (theAction === 'drop') {
            let itemName = item.name;
            if (itemName === 'nothing') {
                message = 'There is nothing to drop, IDIOT!';
            } else if (itemName === 'all') {
                message = 'You dropped all your inventory.';
                this.location.items = this.inventory;
                this.inventory = [];
            } else {
                let itemIdx = this.inventory.indexOf(item);
                if (itemIdx > -1) {
                    let droppedItem = this.inventory.splice(itemIdx, 1);
                    console.log('what got dropped:', droppedItem);
                    this.location.items.push(droppedItem[0]);
                    console.log('the room has:', this.location.items);
                };
                message = 'You no longer have a ' + itemName + ' in your inventory.';
            };
        } else if (theAction === 'use') {
            message = 'You are using the ' + item.name + '.';
        } else if (theAction === 'go') {
            let response = this.location.move(direction);
            if (response.room) this.location = response.room;
            message = response.text;
        };
        return message;
    }
};

export default thePlayer;

// module.exports = thePlayer;
