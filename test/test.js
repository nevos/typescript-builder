/** example js usage */
const { Builder } = require("../lib/builder") ;
const { AnimalBuilder }  = require("../lib/animalBuilder")
const { Animal } = require("../lib/animalBuilder")
const { Dog } = require("../lib/animalBuilder")
const { Cat } = require("../lib/animalBuilder")
const { test } = require("../lib/test")

// avoid the switch/conditional statements 
// if we have many types of classes we need to create, we can still reference the correct class by name in O(1).
// a "json-switch" pattern is more effective then if/else or switch.
let animalTypes = {
    Dog,
    Cat
}

function proto(name) {
    return animalTypes[name];
}

let someAnimals = ['Dog', 'Cat']; // these dont have to the class names.

// we can create objects using a literal.
let animalBuilder = new AnimalBuilder(proto(someAnimals[0]));  // creates dog type
animalBuilder.setType("dog");
animalBuilder.setkingdom("pet");
animalBuilder.setSound("bark");
let dog = animalBuilder.getInstance();
console.log("Type:", dog.Type, ",Kingdom:", dog.kingdom, ",Sound:", dog.Sound);

animalBuilder = new AnimalBuilder(proto(someAnimals[1]));  // creates dog type
let cat = animalBuilder.getInstance();
animalBuilder.setSound("miau").setkingdom("pet").setType("cat");
console.log("type:", cat.Type, ",kingdom:", cat.Kingdom, ",sound:", cat.Sound);