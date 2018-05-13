"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(type) {
        this.type = type;
        this.instance = Object.create(type);
    }
    getInstance() {
        return this.instance;
    }
    creator(type) {
        this.instance = Object.create(type);
        return this.instance;
    }
}
exports.Builder = Builder;
