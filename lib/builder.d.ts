export interface IBuilder<T> {
    instance: T;
    getInstance<I extends T>(): T;
    setInstance(type: new () => T): T;
}
export declare class Builder<T> implements IBuilder<T> {
    instance: T;
    constructor(type: new () => T);
    setInstance(type: new () => T): T;
    getInstance<I extends T>(): T;
}
