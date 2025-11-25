let currentValue = '';
let previousValue = '';
let operatorValue = '';
let memoryValue = '';
let result = '';
let expression = '';
const num = [];
const tokens = [];

const display = document.querySelector('.display');
const recallOrClear = document.getElementById('recallOrClear');
const subMemory = document.getElementById('subMemory');
const addMemory = document.getElementById('addMemory');
const direction = document.getElementById('direction');
const clearEntry = document.getElementById('clearEntry');
const allClear = document.getElementById('allClear');
const period = document.getElementById('period');
const equal = document.getElementById('equal');

function addNumbers (...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", event => {
        currentValue = currentValue + event.target.textContent;
        display.textContent = expression + currentValue;
    })
})

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener("click", event => {
        previousValue = expression + currentValue;
        tokens.push(currentValue);
        currentValue = '';
        operatorValue = event.target.textContent;
        tokens.push(operatorValue);
        expression = previousValue + operatorValue;
        display.textContent = expression;
    })
})


function mathOperations () {
    if (operatorValue == "+") {
        return addNumbers(num);
    } 
}

function calculateExpression () {
    let left;
    let right;
    let multRes;
    let divRes;
    const firstOperations = tokens.find((element) => element == "*" || element == "/");
    const index = tokens.indexOf(firstOperations);
    if (index !== -1) { //if the target element doesn't exist in the array
        left = tokens.slice(0, index);
        right = tokens.slice(index + 1);
        console.log(left);
        console.log(right);
    }
    const indexLeft = tokens.indexOf(left);
    if (index == "*") {
        multRes = Number(left) * Number(right);
        tokens.splice(indexLeft, 0, "multRes");
    }
    if (index == "/") {
        divRes = Number(left) / Number(right);
        tokens.splice(indexLeft, 0, "divRes");
    }

    return tokens;
}

document.querySelector(".equal").addEventListener("click", () => {
    tokens.push(currentValue);
})

calculateExpression ();
console.log(tokens)