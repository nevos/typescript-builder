"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(type) {
        this.instance = this.setInstance(type);
    }
    setInstance(type) {
        this.instance = new type();
        return this.instance;
    }
    getInstance() {
        return this.instance;
    }
}
exports.Builder = Builder;
