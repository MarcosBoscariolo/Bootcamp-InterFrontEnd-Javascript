function replacePairs(list){
    if(!list.length) return "Lista vazia!";
    for(let i =0; i < list.length; i++){
        if(list[i] % 2 === 0){
            console.log(`Substituindo ${list[i]} por 0...`);
            list[i] = 0;
        }
    }
    return list;
}

let listNumbers = [1, 3, 4, 27, 40, 33, 17, 86, 74];
console.log(replacePairs(listNumbers));