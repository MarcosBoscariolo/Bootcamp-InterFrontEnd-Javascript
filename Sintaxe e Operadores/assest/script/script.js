function comparacao(){
    const number1 = Number(prompt('Digite o primero número:'));
    const number2 = Number(prompt('Digite o segundo número:'));  
   
    let primeiraFrase = criaPrimeiraFrase(number1, number2);
    let segundaFrase = criaSegundaFrase(number1, number2);

    return alert(`${primeiraFrase} ${segundaFrase}`);

    function criaPrimeiraFrase(num1, num2){
        let primeiraFrase = `Os números ${num1} e ${num2}`;
        let simNao = 'não';

        if (num1 === num2) {
            simNao = '';
        }

        return `${primeiraFrase} ${simNao} são iguais.`;
    }

    function criaSegundaFrase(num1, num2){
        const soma = num1+num2;
        let compDez = '';
        let compVinte = '';

        if(soma > 10){
            compDez = 'maior';
        }else{
            compDez = 'menor';
        }

        if(soma > 20){
            compVinte = 'maior';
        }else{
            compVinte = 'menor';
        }
        return `A soma entre ${num1} + ${num2} é ${soma}, que é ${compDez} do que 10 e ${compVinte} do que 20.`;
    }
}

comparacao();