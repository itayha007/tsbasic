
const  getAverage = (numbers: number[]) : number => {
    let sum  = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}

const getAmountOfPositve = (numbers: Number[]) : number =>{
    let count = 0;
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i]>0) count++;
    }
    return count;
}


const sortList = (numbers: Number[]) : Number[] =>{
    
    return numbers.sort();
}



const getUserInput = () : number[] =>{
    const numbers: number[] =[] ;
    let num = prompt("enter number(to stop enter -1)", " ") ;
    while(Number(num) != -1){
        numbers.push(Number(num));
        num = prompt("enter number(to stop enter -1)", " ") ;

    }
    return  numbers;

}
const part1  = () : void =>{
    const numbers : number[] = getUserInput();
    
    let action = prompt("enter what you would like to do (average, amountpositive, sortlist)" ,"average, amountpositive, sortlist ")
     
    switch(action){
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
            alert("dont recognize any of that")

    }

} 


import * as fs from 'fs';
const part2 = () : void=>{
    fs.readFile('currencies.txt', 'utf8', (err, data) => {
        if (err) throw err;
    
        const currencies: {[key: string]: number} = {};
        const lines = data.split('\n');
    
        for (const line of lines) {
            const currency = line.split(':');
            currencies[currency[0].trim()] = Number(currency[1]);
        }
    });

    

}
