
const thePlayer = {
    inventory: [],
    location: {},
    action(cmd){
        let theActions = cmd.split(' ');
        if (theActions[0] = 'get') {
            this.inventory.push(theActions[1]);
        } else {
            this.location = theActions[0].location;
        };
    }
};

// export default thePlayer;

module.exports = thePlayer;
