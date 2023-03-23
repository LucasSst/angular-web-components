class Character {
    name?: string
    stregth:number
    skills:number


    constructor(name:string,stregth:number, skills:number){
        this.name = name
        this.stregth = stregth
        this.skills = skills
    }


    TheAttack():void{
        console.log(`The caracter is attack, damage: ${this.stregth}`)
    }
}


//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints: number;
    constructor(name:string,stregth:number, skills:number, magicPoints: number){      
        super(name, stregth, skills)
        this.magicPoints = magicPoints
    }




}
const David = new Character ('Bray', 5, 1)
const p2 = new Magician('Rtup', 1, 2, 5)