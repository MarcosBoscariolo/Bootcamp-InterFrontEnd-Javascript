const ALUNOS = [
    {
        nome: 'Miquel',
        nota: 5,
        curso: 'Matemática',
    },
    {
        nome: 'Ana',
        nota: 9,
        curso: 'Português',
    },
    {
        nome: 'Danilo',
        nota: 6,
        curso: 'Matemática',
    },
    {
        nome: 'Rodrigo',
        nota: 4,
        curso: 'História',
    },
    {
        nome: 'Maria',
        nota: 10,
        curso: 'Física',
    }
]

function alunosAprovados(array, media){

    let aprovados = [];

    for(let i = 0; i < array.length; i++){

        // object destructuring
        const {nome, nota} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }

    }

    return aprovados;
}

console.log(alunosAprovados(ALUNOS, 6));