const nikeJordan = {
    name: 'Nike Jordan',
    price: 299.90,
}

const nikeLebron = {
    name: 'Nike Lebron',
    price: 189.99,
}

function priceAdjustment(array, thisArg){
    return array.map(function(item){
        return item + this.price;
    }, thisArg);
}

const adjustment = [80.75];

console.log(`Reajuste de preço no tênis ${nikeJordan.name}`, priceAdjustment(adjustment, nikeJordan));
console.log(`Reajuste de preço no tênis ${nikeLebron.name}`, priceAdjustment(adjustment, nikeLebron));