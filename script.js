let currentValue = '';
let previousValue = '';
let operatorValue = '';
let memoryValue = '';

const display = document.querySelector('.display');
const recallOrClear = document.getElementById('recallOrClear');
const subMemory = document.getElementById('subMemory');
const addMemory = document.getElementById('addMemory');
const squareRoot = document.getElementById('squareRoot');
const percent = document.getElementById('percent');
const direction = document.getElementById('direction');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const divide = document.getElementById('divide');
const clearEntry = document.getElementById('clearEntry');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const multiply = document.getElementById('multiply');
const allClear = document.getElementById('allClear');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const minus = document.getElementById('minus');
const zero = document.getElementById('zero');
const twoZero = document.getElementById('twoZero');
const period = document.getElementById('period');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');



document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            currentValue += number.textContent;
            display.textContent = currentValue;
        });
    })

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            previousValue = currentValue;
            operatorValue = operator.textContent;
            currentValue = '';
            display.textContent = previousValue + operatorValue;
        })
    })
});
