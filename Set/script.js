function valoresUnicos(array){
    const mySet = new Set(array);
    return [... mySet];
}

const numbers = [30, 30, 40, 5, 223, 2049, 2049, 5, 10, 2];

console.log(valoresUnicos(numbers));