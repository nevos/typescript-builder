export interface IBuilder {
    creator<T>(type: {
        new (): T;
    }): T;
}
export declare class Builder<T> implements IBuilder {
    private type;
    private instance;
    getInstance(): any;
    constructor(type: {
        type: new () => T;
    });
    creator<T>(type: {
        new (): T;
    }): T;
}
