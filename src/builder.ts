// // Builder pattern for usage with class literals
export interface IBuilder<T> {
    instance: T ;
    getInstance<I extends T>(): T ;
    setInstance(type: new()=> T): T ;
}


export class Builder<T> implements IBuilder<T> {
    instance: T;

    constructor(type: new()=> T) {
       this.instance = this.setInstance(type) ;
    }

    setInstance(type: new()=> T): T {        
        this.instance = new type();
        return this.instance;
    }

    getInstance<I extends T>(): T {        
        return this.instance
    }

}

