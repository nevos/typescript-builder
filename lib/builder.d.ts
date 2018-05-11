export interface IBuilder {
    creator<T>(type: {
        new (): T;
    }): T;
}
export declare class Builder<T> implements IBuilder {
    private instance;
    getInstance(): any;
    constructor(type: {
        new (): T;
    });
    creator<T>(type: {
        new (): T;
    }): T;
}
