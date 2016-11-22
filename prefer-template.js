"use strict";

const name = 'Janek Kowalski';
console.log(`${name} to jest wewnątrz linijkowy tekst
nowa linijka ${2+2}`);

console.log(dumpTag(5, `${name}`));


function dumpTag(id, name) {
    return `${id} - ${name}`;

}