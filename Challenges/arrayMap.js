const arrayInput= [4, 2, 7, 1, 9, 5];
const target= 17;

let startPoint= 0;
let sum= 0;
let trueFalse= false;

for(let endPoint= 0; endPoint<= arrayInput.length; endPoint++){
    sum += arrayInput[endPoint];
    
    while(sum > target && startPoint <= endPoint){
        sum -= arrayInput[startPoint];
        startPoint++;
    }
    
    if(sum === target){
        trueFalse= true;
    }
}

console.log(trueFalse);