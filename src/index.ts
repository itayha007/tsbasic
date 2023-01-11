/// ex1 
const  getAverage = (numbers: number[]) : number => {
    let sum  = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}

///console.log(getAverage([2,3,4,56,4,2,4,5,5,4,3,4,4]))

/// ex2

const getAmountOfPositve = (numbers: Number[]) : number =>{
    let count = 0;
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i]>0) count++;
    }
    return count;
}
///console.log(getAmountOfPositve([2,3,4,56,4,2,4,5,5,4,3,4,4]))

/// ex3 
const sortList = (numbers: Number[]) : Number[] =>{
    
    return numbers.sort();
}

/// console.log(sortList([2,3,4,56,4,2,4,5,5,4,3,4,4]))