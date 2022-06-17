"use strict";

function sayHello(Name) {
    return ("Привет" + "," + " " + Name + "!");
}

console.log(sayHello("Антон"));

// ------------------------------------------

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(5));

// ------------------------------------------

function getMathResult(NumberOne, NumberTwo) {
    if (typeof(NumberTwo) != "number" || NumberTwo <= 0) {
            return NumberOne;
 }

    let str = "";

    for (let i = 1; i <= NumberTwo; i++) {
        if (i === NumberTwo) {
            str += NumberOne * i;
        } else {
            str += NumberOne * i + "---";
        }
    }   
        return str;
}

console.log(getMathResult (10, 14));