"use strict";
/** example ts usage */
const { Builder } = require('./builder');
class AnimalBuilder extends Builder {
    setType(type) {
        this.getInstance().type = (type || "animal");
        return this;
    }
    setkingdom(kingdom) {
        this.getInstance().kingdom = kingdom;
        return this;
    }
    setSound(sound) {
        this.getInstance().sound = sound;
        return this;
    }
}
module.exports.AnimalBuilder = AnimalBuilder;
