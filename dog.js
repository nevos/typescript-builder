const { Animal } = require('./animal');

class Dog extends Animal {

    setType() {
        this.type = "dog";
    }

    constructor(type,kingdom,sound) {
        this.type = type;
        this.kingdom = kingdom;
        this.sound = sound;
    }
}

module.exports.Dog = Dog;