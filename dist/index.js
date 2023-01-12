"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};
const getAmountOfPositve = (numbers) => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0)
            count++;
    }
    return count;
};
const sortList = (numbers) => {
    return numbers.sort();
};
const getUserInput = () => {
    const numbers = [];
    let num = prompt("enter number(to stop enter -1)", " ");
    while (Number(num) != -1) {
        numbers.push(Number(num));
        num = prompt("enter number(to stop enter -1)", " ");
    }
    return numbers;
};
const part1 = () => {
    const numbers = getUserInput();
    let action = prompt("enter what you would like to do (average, amountpositive, sortlist)", "average, amountpositive, sortlist ");
    switch (action) {
        case "average":
            getAverage(numbers);
            break;
        case "amountpositive":
            getAmountOfPositve(numbers);
            break;
        case "sortlist":
            sortList(numbers);
            break;
        default:
            alert("dont recognize any of that");
    }
};
const part2 = () => {
    const fileContent = `dollar: 1
        euro: 0.8
        nis: 1
        peso: 21.5
        pound: 0.7
        yen: 105`;
};
const fs = __importStar(require("fs"));
fs.readFile('currencies.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    const currencies = {};
    const lines = data.split('\n');
    for (const line of lines) {
        const currency = line.split(':');
        currencies[currency[0].trim()] = Number(currency[1]);
    }
    console.log(currencies);
});
