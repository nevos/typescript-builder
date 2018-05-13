

compile typescript:
npm run tsc
node index

typescript based builder example, which allows to use literals to create new objects of types.  


# typescript-builder

Typescript builder pattern and example, using literal class creation method.


## Installation

```
yarn add builder-pattern
```

## Usage Example
```
import { Builder } from 'typescript-builder';

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

abstract class Animal {
    private type: string;
    private kingdom: string;
    private sound: string;

    public set Type(type: string) { this.type = type };
    public get Type() { return this.type; };
    public set Sound(sound: string) { this.sound = sound };
    public get Sound() { return this.sound; };
    public set Kingdom(kingdom: string) { this.kingdom = kingdom };
    public get Kingdom() { return this.kingdom; };

    constructor(type: string, kingdom: string, sound: string) {
        this.type = type;
        this.kingdom = kingdom;
        this.sound = sound;
    }
}

class Dog extends Animal {
    // what ever overrides dog has...
}

const animalBuilder = new AnimalBuilder(Object.create(Dog.prototype));
animalBuilder.setType("dog").setkingdom("pet").setSound("bark");
let dog = animalBuilder.getInstance();

console.log("dog", animalBuilder.getInstance());
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
