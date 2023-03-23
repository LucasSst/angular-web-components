//Objeto - sem previsibilidade
let produto:object = {
    name:'Lucas',
    cidade:'PA',
    idade:'19',
}


//Objeto sheipado/tipado - com previsibilidade


type ProdutoLoja ={
    nome:string;
    preco: number;
    unidades: number;
}


let meuProduto:ProdutoLoja = {
    nome: 'Smartphone',
    preco: 987.9,
    unidades: 10,
}
