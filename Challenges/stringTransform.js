const a= prompt("Enter the string: ");

let transformStr= a;

let divideBy3= (a.length % 3 == 0);
let divideBy5= (a.length % 5 == 0);

if(divideBy3 && divideBy5){
    let revStr = a.split("").reverse().join("");
    transformStr= revStr.split("").map(char => char.charCodeAt(0)).join(" ");
    console.log(revStr);
    console.log(transformStr);
}

else if(divideBy3){
    let revStr = a.split("").reverse().join("");
    transformStr= revStr;
    console.log(transformStr);
    }
    
else if(divideBy5){
    transformStr= a.split("").map(char => char.charCodeAt(0)).join(" ");
    console.log(transformStr);
}
else{
    console.log("Error!");
}