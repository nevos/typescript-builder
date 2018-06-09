

compile typescript:
npm run tsc
node index

typescript based builder example.  


# typescript-builder

Typescript builder pattern and example.


## Installation

```
yarn add typescript-builder
```

## TS Usage Example
```
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

const animalBuilder = new AnimalBuilder<Animal>(Dog);
animalBuilder.setType("dog").setSound("bark");
let dog = <Dog>animalBuilder.getInstance<Dog>();
console.log("dog", dog, dog.Bark());

const animalBuilder2 = new AnimalBuilder<Cat>(Cat);
let cat = animalBuilder2.getInstance();
animalBuilder2.setType("cat").setSound("miau");
console.log("cat", cat, cat.Miau());

```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
