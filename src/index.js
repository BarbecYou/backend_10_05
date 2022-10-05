"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
let message = 'Hello World';
console.log(message);
function negyzet(szam) {
    return szam * szam;
}
let ures;
if (message.startsWith('H')) {
    console.log('H-val kezdődik');
    ures = 1;
}
else {
    ures = 2;
}
let ertek = 5;
// ertek = 'adf';
// let s : string = negyzet(3);
let user = new User_1.User('nev', 44);
user.kiir();
let users = [];
users.push(new User_1.User('masikuser', 10));
users.push(user);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'user2'];
let userHalmaz = new Set();
let nevUser = new Map();
let nevUser2 = new Map();
nevUser2.set('usernev', new User_1.User('usernev', 33));
//nevUser2.get('usernev').kiir();
/*
function osszeg(t : number[] | string[]){
    let sum : string | number = 0;
    for (let e of t){
        sum += e;
    }
    return sum;
}
console.log(osszeg([1, 45, -132783, 132]));
console.log(osszeg(['a', 'b', 'c'])); */
// console.log(osszeg([1, 'b', 'c'])); 
function IDKiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
IDKiir(12);
IDKiir('akdalf3453');
let elem = document.getElementById('asdf');
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
function szamol() {
    var _a;
    let szam = parseInt((_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.value);
    document.getElementById('kimenet').textContent = negyzet(szam).toString();
}
document.addEventListener('DOMContentLoaded', init);
