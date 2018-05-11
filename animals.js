const { Dog } = require('./dog.js');
const { Cat } = require('./cat.js');

// here we avoid the switch/conditional statements 
// if we have many types of classes we need to create, 
// we can still reference the correct class by name in O(1).
// a json-switch pattern is more effective then if/else or switch.
let animalTypes = {
    Dog,
    Cat
}

function proto(name) {
    return animalTypes[name].prototype;
}

module.exports.animalTypes = animalTypes;
module.exports.proto = proto;