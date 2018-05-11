// builder pattern for usage with class literals
export interface IBuilder {
    creator<T>(type: { new(): T ;} ): T ;
}


export class Builder<T> implements IBuilder {
    private instance: any;  // privacy only enforced within the tsc compiler.
    
    getInstance() {
        return this.instance ;
    }

    constructor(type: { new (): T; }) {
        this.instance = Object.create(type);
    }

    creator<T>(type: { new(): T ;} ): T {
        this.instance = Object.create(type);
        return this.instance ; 
    }
}

