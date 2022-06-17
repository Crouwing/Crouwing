"use strict";

const usdCurr = 28;
const uerCurr = 30;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promo (result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promo(res);

// promo(convert(500, usdCurr)); - Альтернатива. Функция в функции.

function test () {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
        console.log("done");
}

test ();

function doNothing () {}

console.log(doNothing() === undefined);

// Любая фукнция всегда возвращает что то, даже если не прирывать возвращает undefined )