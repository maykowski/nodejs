"use strict";

const arr = ['Wojtek', 'jest', 'zajebisty'];


console.log(arr);

function spread(arg1, arg2, arg3) {
    return `${arg1} ${arg2} ${arg3}`
}

console.log(spread(...arr));
