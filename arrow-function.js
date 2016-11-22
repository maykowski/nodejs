"use strict";


const arrow = () => {
    console.log('Jestem prostą funkcją strzałkową');
}

const arrowParam = (a) => {
    console.log('Jestem prostą funkcją strzałkową z parametrem ', a);
}

arrow();
arrowParam('test');


const obj = {
    test(){
        const fn = function () {
            return this === obj;
        }
        const arrow = () => {
            return this === obj;
        }

        console.log(fn());
        console.log(arrow());
    }
}


obj.test();

function testParam(arg1 = 'default') {
    console.log(arg1);
}

testParam();