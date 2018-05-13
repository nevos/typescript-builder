/** example ts usage */
const { Builder } = require('./builder');
class AnimalBuilder extends Builder {
    setType(type: string): AnimalBuilder {
        this.getInstance().type = (type || "animal");
        return this;
    }

    setkingdom(kingdom: string): AnimalBuilder {
        this.getInstance().kingdom = kingdom;
        return this;
    }
    
    setSound(sound: string): AnimalBuilder {
        this.getInstance().sound = sound;
        return this;
    }
}

module.exports.AnimalBuilder = AnimalBuilder;
