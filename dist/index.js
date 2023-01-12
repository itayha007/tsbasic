"use strict";
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
part1();
