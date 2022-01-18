const pessoa1 = {
    nome: 'Eduardo',
    idade: 16
}

const pessoa2 = {
    nome: 'Ana',
    idade: 22
}


function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calcularIdade.call(pessoa1, 5));
console.log(calcularIdade.apply(pessoa2, [5]));