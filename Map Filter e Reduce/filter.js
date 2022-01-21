const myKyries= [
    kyrie = {
        name: 'Kyrie',
        price: 799.90,
    },

    kyrie6 = {
        name: 'Kyrie 6',
        price: 539.99,
    },

    kyrie7 = {
        name: 'Kyrie 7',
        price: 849.99,
    },

    kyrieFlytrap = {
        name: 'Kyrie Flytrap',
        price: 849.99,
    }
];

function filterPrice(array){
    return array.filter(callback);
}

function callback(item){
    if(item.price < 800){
        return item;
    }
}

console.log(filterPrice(myKyries));

