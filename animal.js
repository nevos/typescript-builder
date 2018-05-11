class Animal {
    
    getClassName() {
        // will get the inherited.
        return this.constructor.name;
    }

    setType(type) {
        this.type = type;
    }

    setkingdom(kingdom) {
        this.kingdom = kingdom;
    }

    setSound(sound) {
        this.sound = sound;
    }

    getType() {
        return this.type;
    }

    getkingdom() {
        return this.kingdom;
    }

    makeSound() {
        return this.sound;
    }
}

module.exports.Animal = Animal;