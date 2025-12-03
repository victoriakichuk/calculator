let currentValue = "";
let previousValue = "";
let operatorValue = "";
let memoryValue = "";
let result = "";
let expression = "";
const num = [];
const tokens = [];
let finalExpression;

const display = document.querySelector(".display");
const recallOrClear = document.getElementById("recallOrClear");
const subMemory = document.getElementById("subMemory");
const addMemory = document.getElementById("addMemory");
const direction = document.getElementById("direction");
const clearEntry = document.getElementById("clearEntry");
const allClear = document.getElementById("allClear");
const period = document.getElementById("period");
const equal = document.getElementById("equal");

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
    let left;
    let right;
    let multRes;
    let divRes;

    while (tokens.includes("X") || tokens.includes("/")) {
        const firstOperations = tokens.find(
            (element) => element == "X" || element == "/"
        );
        const index = tokens.indexOf(firstOperations);
        if (firstOperations == "X") {
            if (index !== -1) {
                left = tokens[index - 1];
                right = tokens[index + 1];
            }
            multRes = Number(left) * Number(right);
            tokens.splice(index - 1, 3, multRes);
        }

        if (firstOperations == "/") {
            if (index !== -1) {
                left = tokens[index - 1];
                right = tokens[index + 1];
            }
            divRes = Number(left) / Number(right);
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
            if (index !== -1) {
                left = tokens[index - 1];
                right = tokens[index + 1];
            }
            sum = Number(left) + Number(right);
            tokens.splice(index - 1, 3, sum);
        }

        if (nextOperations == "-") {
            if (index !== -1) {
                left = tokens[index - 1];
                right = tokens[index + 1];
            }
            sub = Number(left) - Number(right);
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
