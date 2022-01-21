const shoes = [
    {
        name: 'Kyrie 6',
        price: 239.99
    },
    {
        name: 'Nike Jordan',
        price: 299.90,
    },
    {
        name: 'Nike Lebron',
        price: 189.99,
    }
]

const money = 800;

function buy(money, listItems){    
    return listItems.reduce(function(previous, current){
        return previous - current.price;     
    }, money);
}

console.log(buy(money, shoes));