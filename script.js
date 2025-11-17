let currentValue = '';
let previousValue = '';
let operatorValue = '';
let memoryValue = '';
let result = '';

const display = document.querySelector('.display');
const recallOrClear = document.getElementById('recallOrClear');
const subMemory = document.getElementById('subMemory');
const addMemory = document.getElementById('addMemory');
const direction = document.getElementById('direction');
const clearEntry = document.getElementById('clearEntry');
const allClear = document.getElementById('allClear');
const period = document.getElementById('period');
const equal = document.getElementById('equal');

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", event => {
        currentValue = currentValue + event.target.textContent;
        display.textContent = '';
        display.textContent = currentValue;
    })
})

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener("click", event => {
        previousValue = currentValue;
        currentValue = "";
        operatorValue = event.target.textContent;
        display.append(operatorValue);
    })
})

function mathOperations (previousValue, currentValue, operatorValue) {
    if (operatorValue == "+") {
        return result = previousValue + currentValue;
    } else if (operatorValue == "-") {
        return result = previousValue - currentValue;
    } else if (operatorValue == "*") {
        return result = previousValue * currentValue;
    } else if (operatorValue == "/") {
        return result = previousValue / currentValue;
    } else if (operatorValue == "√") {
        return result = Math.sqrt(currentValue);
    } else if (operatorValue == "%") {
        return (previousValue / 100) * currentValue;
    }
}

document.querySelector(".equal").addEventListener("click", () => {
    result = mathOperations(previousValue, currentValue, operatorValue);
    display.textContent = '';
    display.append(result);
})
