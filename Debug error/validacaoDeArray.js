function validarArray(array, num){
    try{
        if(!array && !num) throw new ReferenceError('Envie os parâmetros');
        if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo object');
        if(typeof num !== 'number') throw new TypeError('Não foi passado um número do tipo number');
        if(array.length !== num) throw new RangeError('Tamanho inválido!');

        return array;
    } catch(error){
        if(error instanceof ReferenceError){
            console.log(error.name, error.message);
        } else if(error instanceof TypeError){
            console.log(error.name, error.message);
        } else if(error instanceof RangeError){
            console.log(error.name, error.message);
        } else{
            console.log('Ocorreu um erro inesperado!');
        }
    }
}

console.log(validarArray());