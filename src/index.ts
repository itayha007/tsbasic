
const getAverage = (numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

const getAmountOfPositive = (numbers: number[]): number => {
    return numbers.filter(num => num > 0).length;
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
    
    let action   = prompt("enter what you would like to do (average, amountpositive, sortlist)" ,"average, amountpositive, sortlist "); 
     
    switch(action){
        case "average":
            alert(getAverage(numbers));
            break;
        case "amountpositive":
            alert(getAmountOfPositive(numbers));
            break;
        case "sortlist":
            alert(sortList(numbers));
            break;
        default:
            alert("dont recognize any of that")

    }

} 


type Currency = {
    [key: string]: number
};


const readFile = async (filePath: string): Promise<Currency> => {
    const res = await fetch(filePath);
    const fileBlob = await res.blob();
    return new Promise<Currency>((resolve, reject) => {
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
        reader.readAsText(fileBlob);
    });
};


const part2 = async () : Promise<void> => {
    let filePath = "currencies.txt";
    let currencies = await readFile(filePath);

    let action = prompt("what would like to do? (for value write 'value', 'convert', 'multi_convert'");

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
    else if (action == "convert"){
        let currency = prompt("enter dollar, yen, euro, nis, peso, pound"); 
        let amount = prompt("enter the amount you would like to convert");
        switch(currency){
            case "dollar":
                alert(currencies.dollar*Number(amount));
                break;
            case "yen":
                alert(currencies.yen*Number(amount));
                break;
            case "euro":
                alert(currencies.euro*Number(amount));
                break;
            case "nis":
                alert(currencies.nis*Number(amount));
                break;
            case "peso":
                alert(currencies.peso*Number(amount));
                break;
            case "pound":
                alert(currencies.pound*Number(amount));
                break;
            default:
                alert("no such currency")
        }
        

    }
    else if(action=="multi_convert"){
        let sum = 0;
        let flag = true;
        let currency = prompt("enter dollar, yen, euro, nis, peso, pound( to stop enter 'stop')"); 
        let amount = prompt("enter the amount you would like to convert");
        while(currency != "stop"){

            switch(currency){
                case "dollar":
                    sum += currencies.dollar*Number(amount);
                    break;
                case "yen":
                    sum += currencies.yen*Number(amount);
                    break;
                case "euro":
                    sum += currencies.euro*Number(amount);
                    break;
                case "nis":
                    sum += currencies.nis*Number(amount);
                    break;
                case "peso":
                    sum += currencies.peso*Number(amount);
                    break;
                case "pound":
                    sum += currencies.pound*Number(amount);
                    break;
                
                default:
                    alert("no such currency")
            }
            currency = prompt("enter dollar, yen, euro, nis, peso, pound( to stop enter 'stop')"); 
            if(currency =="stop"){
                flag  = false;
            }
            if(flag){
                 
                amount = prompt("enter the amount you would like to convert");
            }
            
                
        }
        alert("that  is " + sum + " nis")

    }
}
part2();