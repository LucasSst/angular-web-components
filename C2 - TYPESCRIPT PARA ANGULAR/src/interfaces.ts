type robot1 ={
    readonly id:number | string;
    name:string;
}



interface robot2{
    readonly id:number | string;
    name:string;
    sayHellou():string
}



class Pessoa implements robot2 {
    id: string | number;
    name: string;
    constructor(id: string | number , name:string){
        this.id = id;
        this.name = name;
    }
    sayHellou(): string {
        return `hellouuuu ${this.name}`
    }
}

const p = new Pessoa(2, 'Lucas')
console.log(p.sayHellou())