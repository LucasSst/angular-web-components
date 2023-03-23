//Funções


function addNumber(x:number, y:number):number {
    return x + y;
}


function addToHello(name:string) {
    return `Hellou user: ${name}`
}




let soma: number = addNumber(4, 7);


console.log(addToHello('Lucas'))


function CallToPhone(phone: number | string):number | string {
    return phone;
}

async function getDatabase(id:number):Promise<number | string>{
    return 'Lucas';
}
