const { AnimalBuilder } = require('./lib/AnimalBuilder.js');
const { proto } = require('./animals.js');
const { Platypus } = require('./platypus.js');
let someAnimals = ['Dog', 'Cat', 'Platypus']; // these dont have to the class names.

// we can create objects using a literal.
let animalBuilder = new AnimalBuilder(proto(someAnimals[0]));  // creates dog type
animalBuilder.setType("dog");
animalBuilder.setkingdom("pet");
animalBuilder.setSound("bark");
let dog = animalBuilder.getInstance();

// we can reuse the builder and also concaternate builder functions.
let pla = animalBuilder.creator(proto(someAnimals[2]));
animalBuilder.setSound("blup").setkingdom("semiaquatic egg-laying mammal").setType("platypus");

let cat = animalBuilder.creator(proto(someAnimals[1]));
animalBuilder.setSound("miau").setkingdom("pet").setType("cat");

console.log("type:", dog.getType(), ",kingdom:", dog.getkingdom(), ",sound:", dog.makeSound());
console.log("type:", cat.getType(), ",kingdom:", cat.getkingdom(), ",sound:", cat.makeSound());
console.log("type:", pla.getType(), ",kingdom:", pla.getkingdom(), ",sound:", pla.makeSound());

// we can also create a platipus type using a literal without the builder
let secondPlatypus = new proto(someAnimals[2]);
secondPlatypus.setSound("blup blup").setkingdom("semiaquatic egg-laying mammal").setType("platypus");
console.log("type:", secondPlatypus.getType(), ",kingdom:", secondPlatypus.getkingdom(), ",sound:", secondPlatypus.makeSound());

