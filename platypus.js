const { Animal } = require('./animal');
const { animalTypes } = require('./animals.js');

class Platypus extends Animal {
    
    makeSound() {
        return this.sound;
    }

    setType(type) {
        this.type = type;
        return this;
    }
    setkingdom(kingdom) {
        this.kingdom = kingdom;
        return this;
    }
    setSound(sound) {
        this.sound = sound;
        return this;
    }


    constructor(type, kingdom, sound) {
        this.type = type;
        this.kingdom = kingdom;
        this.sound = sound;
    }
}

// we don't have to touch the previously declared types array.
// we can just extend animalTypes object.
animalTypes.Platypus = Platypus;
module.exports.Platypus = Platypus;
