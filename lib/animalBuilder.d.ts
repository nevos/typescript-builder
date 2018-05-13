/** example ts usage */
declare const Builder: any;
declare class AnimalBuilder extends Builder {
    setType(type: string): AnimalBuilder;
    setkingdom(kingdom: string): AnimalBuilder;
    setSound(sound: string): AnimalBuilder;
}
