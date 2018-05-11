const {Animal} = require('./animal');

class Cat extends Animal {

    makeSound() {
        return this.sound ;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type ;
    }

    constructor(type,kingdom,sound) {
        this.type = type;
        this.kingdom = kingdom;
        this.sound = sound;
    }    
}

module.exports.Cat = Cat;