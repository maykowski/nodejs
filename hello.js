console.log("Hello world!");
test2();

function test(){
    'use strict';
    {
        var a = 1;
        const b = 2;
    }
    console.log(a)
    console.log(b)
}

function test2(){
    //'use strict';
    console.log(typeof a);
    console.log(typeof b);
    {
        var a = 1;
        const b = 2;
    }

}