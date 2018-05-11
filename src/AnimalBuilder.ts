"use strict";
const { Builder } = require('./builder');
class AnimalBuilder extends Builder {
    setType(type: string) {
        this.getInstance().type = (type || "animal");
        return this;
    }
    setkingdom(kingdom: string) {
        this.getInstance().kingdom = kingdom;
        return this;
    }
    setSound(sound: string) {
        this.getInstance().sound = sound;
        return this;
    }
}
;
module.exports.AnimalBuilder = AnimalBuilder;
