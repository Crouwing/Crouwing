"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log (text);
    let num = 30;
    console.log(num);
}

showFirstMessage("Hellow, World!");
console.log(num);

function calc (a, b) {
    return (a + b);
}

console.log (calc(3, 5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function() {
    console.log("Hellow!");
};

logger();

const calc = (a, b) => a + b;