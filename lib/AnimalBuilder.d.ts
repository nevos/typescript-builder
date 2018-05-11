declare const Builder: any;
declare class AnimalBuilder extends Builder {
    setType(type: string): this;
    setkingdom(kingdom: string): this;
    setSound(sound: string): this;
}
