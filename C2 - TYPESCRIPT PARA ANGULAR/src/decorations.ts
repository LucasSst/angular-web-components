
function apiVersion(version: string){
    return( target:any) =>{
        Object.assign(target.prototype,{__version: version} )
    }
}


//attribute decorator

//toda vez que ler uma propriedade, deixado por de baixo panos é chamado o método GET, e toda vez que seta um valor em uma variável/classe é chamado um método chamado SET

function minLength(length: number){
    return (target:any, key:string) =>{
        let _value = target[key];

        const getter = () => "[playt]" + _value;
        const setter = (value:string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        };

        Object.defineProperty(target, key, {   
            get: getter,
            set: setter,
        });

    };
}

class Api {

    @minLength(3)
    name:string
    constructor(name:string){
        this.name = name
    }
    
}

const api = new Api("usuarios");

console.log(api.name);
