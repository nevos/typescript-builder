import { Builder } from "./builder";
export declare class AnimalBuilder<A extends Animal> extends Builder<A> {
    constructor(type: any);
    setType(type: string): AnimalBuilder<A>;
    setkingdom(kingdom: string): AnimalBuilder<A>;
    setSound(sound: string): AnimalBuilder<A>;
}
export declare abstract class Animal {
    private type;
    private kingdom;
    private sound;
    Type: string;
    Sound: string;
    Kingdom: string;
    constructor();
}
export declare class Dog extends Animal {
    Bark(): string;
    constructor();
}
export declare class Cat extends Animal {
    Miau(): string;
    constructor();
}
