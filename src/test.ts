/** example ts usage */
import { Builder } from "./builder"
import { AnimalBuilder } from "./animalBuilder"
import { Animal } from "./animalBuilder"
import { Dog } from "./animalBuilder"
import { Cat } from "./animalBuilder"

const animalBuilder = new AnimalBuilder<Animal>(Dog);
animalBuilder.setType("dog").setSound("bark");
let dog = <Dog>animalBuilder.getInstance<Dog>();
console.log("dog", dog, dog.Bark());

const animalBuilder2 = new AnimalBuilder<Cat>(Cat);
let cat = animalBuilder2.getInstance();
animalBuilder2.setType("cat").setSound("miau");
console.log("cat", cat, cat.Miau());
