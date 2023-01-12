
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


type Currency = {
    [key: string]: number
};

const readFile1 = async () : Promise<Currency> => {
    return new Promise<Currency>((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event: any) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const data = reader.result as string;
                const lines = data.toString().split('\n');
                const currencies: {[key: string]: number} = {};
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
};
const part2 = async () : Promise<void> => {
    let currencies = await readFile1();

    let action = prompt("what would like to do? (for value write 'value', for  ");

    if (action =="value") {
        let currency = prompt("enter dollar, yen, euro, nis, peso, pound"); 
        switch(currency){
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
                alert("no such currency")
        }
    }
}
part2();