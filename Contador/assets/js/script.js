var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
const TAMANHO = 5;

currentNumberWrapper.addEventListener("click", increment);
currentNumberWrapper.addEventListener("click", decrement);

function increment() { 
    currentNumber = currentNumber + 1;    
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumberWrapper.innerHTML > 0){
        document.getElementById('currentNumber').style.color = 'blue';
    }
    if(currentNumberWrapper.innerHTML == 0){
        document.getElementById('currentNumber').style.color = 'gray';
    }
    if(currentNumber <= TAMANHO){
        document.getElementById('subtraction').disabled = false;
    }
    if(currentNumber >= TAMANHO){
        document.getElementById('addition').disabled = true;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumberWrapper.innerHTML < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }
    if(currentNumberWrapper.innerHTML == 0){
        document.getElementById('currentNumber').style.color = 'gray';
    }
    if(currentNumber >= -TAMANHO){
        document.getElementById('addition').disabled = false;
    }
    if(currentNumber <= -TAMANHO){
        document.getElementById('subtraction').disabled = true;
    }
}

