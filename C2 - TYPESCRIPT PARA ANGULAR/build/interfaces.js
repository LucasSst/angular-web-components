"use strict";
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHellou() {
        return `hellouuuu ${this.name}`;
    }
}
const p = new Pessoa(2, 'Lucas');
console.log(p.sayHellou());
