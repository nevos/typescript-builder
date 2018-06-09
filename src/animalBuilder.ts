/* example usage */
import { Builder } from "./builder";

export class AnimalBuilder<A extends Animal> extends Builder<A> {

    constructor(type: any) {
        super(type) ;
    }

    setType(type: string): AnimalBuilder<A> {
        let inst = this.getInstance<A>() ;
        inst.Type = (type || "animal");
        return this;
    }

    setkingdom(kingdom: string): AnimalBuilder<A> {
        this.getInstance<A>().Kingdom = kingdom;
        return this;
    }
    
    setSound(sound: string): AnimalBuilder<A> {
        this.getInstance<A>().Sound = sound;
        return this;
    }
}


export abstract class Animal {
    private type: string;
    private kingdom: string;
    private sound: string;

    set Type(type: string) { this.type = type };
    get Type() { return this.type; };
    set Sound(sound: string) { this.sound = sound };
    get Sound() { return this.sound; };
    set Kingdom(kingdom: string) { this.kingdom = kingdom };
    get Kingdom() { return this.kingdom; };

    constructor() {
        this.type = "" ;
        this.kingdom = "animal" ;
        this.sound = "" ;
    }
}

export class Dog extends Animal {

    public Bark() {
        return this.Sound ; 
    }

    constructor() {
        super() ;
    }
}


export class Cat extends Animal {

    public Miau() {
        return this.Sound ; 
    }

    constructor() {
        super() ;
        this.Kingdom = "pet" ;
    }
}