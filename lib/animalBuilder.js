"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* example usage */
const builder_1 = require("./builder");
class AnimalBuilder extends builder_1.Builder {
    constructor(type) {
        super(type);
    }
    setType(type) {
        let inst = this.getInstance();
        inst.Type = (type || "animal");
        return this;
    }
    setkingdom(kingdom) {
        this.getInstance().Kingdom = kingdom;
        return this;
    }
    setSound(sound) {
        this.getInstance().Sound = sound;
        return this;
    }
}
exports.AnimalBuilder = AnimalBuilder;
class Animal {
    set Type(type) { this.type = type; }
    ;
    get Type() { return this.type; }
    ;
    set Sound(sound) { this.sound = sound; }
    ;
    get Sound() { return this.sound; }
    ;
    set Kingdom(kingdom) { this.kingdom = kingdom; }
    ;
    get Kingdom() { return this.kingdom; }
    ;
    constructor() {
        this.type = "";
        this.kingdom = "animal";
        this.sound = "";
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    Bark() {
        return this.Sound;
    }
    constructor() {
        super();
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    Miau() {
        return this.Sound;
    }
    constructor() {
        super();
        this.Kingdom = "pet";
    }
}
exports.Cat = Cat;
