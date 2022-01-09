function verificarPalindromo(palavra){
    if(typeof palavra !== "string") return "Não é uma palavra!";
    for(let i =0; i < palavra.length /2; i++){
        if(palavra[i] !== palavra[palavra.length - 1 - i]){
            return "Essa palavra não é um palíndromo!";
        }
    }
    return `${palavra} é um palíndromo!`;
}

console.log(verificarPalindromo("omississimo"));