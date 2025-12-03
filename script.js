let currentValue = "";
let previousValue = "";
let operatorValue = "";
let memoryValue = "";
let expression = "";
const tokens = [];
let finalExpression;
let left;
let right;
let multRes;
let divRes;

const display = document.querySelector(".display");
const recallOrClear = document.getElementById("recallOrClear");
const subMemory = document.getElementById("subMemory");
const addMemory = document.getElementById("addMemory");
const direction = document.getElementById("direction");
const clearEntry = document.getElementById("clearEntry");
const allClear = document.getElementById("allClear");
const period = document.getElementById("period");
const equal = document.getElementById("equal");

const operations = {
    "X": function (a, b) { return a * b; },
    "/": function (a, b) { return a / b; },
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; }
};

function performOperation(op, left, right) {
    left = Number(left);
    right = Number(right);
    const fn = operations[op];
    return fn(left, right)
}

document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", (event) => {
        currentValue = currentValue + event.target.textContent;
        display.textContent = expression + currentValue;
    });
});

document.querySelectorAll(".operator").forEach((operator) => {
    operator.addEventListener("click", (event) => {
        previousValue = expression + currentValue;
        tokens.push(currentValue);
        currentValue = "";
        operatorValue = event.target.textContent;
        tokens.push(operatorValue);
        expression = previousValue + operatorValue;
        display.textContent = expression;
    });
});
 
function calculateExpression() {
    while (tokens.includes("X") || tokens.includes("/")) {
        const firstOperations = tokens.find(
            (element) => element == "X" || element == "/"
        );
        const index = tokens.indexOf(firstOperations);
        if (firstOperations == "X") {
            const result = performOperation(firstOperations, left, right)
            tokens.splice(index - 1, 3, result);
        }

        if (firstOperations == "/") {
            const result = performOperation(firstOperations, left, right)
            tokens.splice(index - 1, 3, divRes);
        }
        if (tokens.length == 1) {
            finalExpression = tokens[0];
        }
    }
    while (tokens.includes("+") || tokens.includes("-")) {
        const nextOperations = tokens.find(
            (element) => element == "+" || element == "-"
        );
        const index = tokens.indexOf(nextOperations);
        if (nextOperations == "+") {
            const result = performOperation(firstOperations, left, right)
            tokens.splice(index - 1, 3, sum);
        }

        if (nextOperations == "-") {
            const result = performOperation(firstOperations, left, right)
            tokens.splice(index - 1, 3, sub);
        }
        if (tokens.length == 1) {
            finalExpression = tokens[0];
        }
    }

    return tokens;
}

document.querySelector(".equal").addEventListener("click", () => {
    tokens.push(currentValue);
    calculateExpression();
    display.textContent = finalExpression;
});
