"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const readFile1 = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const data = reader.result;
                const lines = data.toString().split('\n');
                const currencies = {};
                for (const line of lines) {
                    const currency = line.split(':');
                    currencies[currency[0].trim()] = Number(currency[1]);
                }
                resolve(currencies);
            };
            reader.readAsText(file);
        };
        document.body.appendChild(input);
        input.click();
    });
});
const part2 = () => __awaiter(void 0, void 0, void 0, function* () {
    let currencies = yield readFile1();
    let action = prompt("what would like to do? (for value write 'value', for  ");
    if (action == "value") {
        let currency = prompt("enter dollar, yen, euro, nis, peso, pound");
        switch (currency) {
            case "dollar":
                alert(currencies.dollar);
                break;
            case "yen":
                alert(currencies.yen);
                break;
            case "euro":
                alert(currencies.euro);
                break;
            case "nis":
                alert(currencies.nis);
                break;
            case "peso":
                alert(currencies.peso);
                break;
            case "pound":
                alert(currencies.pound);
                break;
            default:
                alert("no such currency");
        }
    }
});
part2();
