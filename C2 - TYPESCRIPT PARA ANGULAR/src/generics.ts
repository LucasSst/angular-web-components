//generics


function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}


const numArray = concatArray<Number[]> ([4,4,4], [4])


const StringArray = concatArray<string[]> (['Yuri', 'Lucas', 'Fernanda'], ['João'])
