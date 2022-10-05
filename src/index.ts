import { User } from "./User";

let message : string = 'Hello World';
console.log(message);

function negyzet(szam : number) : number{
    return szam * szam;
}

let ures : number;
if (message.startsWith('H')){
    console.log('H-val kezdődik');
    ures = 1;
} else {
    ures = 2;
}

let ertek = 5;
// ertek = 'adf';

// let s : string = negyzet(3);

let user = new User('nev', 44);
user.kiir();

let users : User[] = [];
users.push(new User('masikuser', 10));
users.push(user);
console.log(users);
let u = users[1];

for (let e of users){
    e.kiir();
}
let usernames : Array<string> = ['str1', 'user2'];
let userHalmaz : Set<User> = new Set();

let nevUser : Map<string, User> = new Map();
let nevUser2 = new Map<string, User>();

nevUser2.set('usernev', new User('usernev', 33));
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

function IDKiir(id: number | string){
    if (typeof id === 'number'){
        console.log(id);
    }else {
        console.log(id.toUpperCase());
    }
}

IDKiir(12);
IDKiir('akdalf3453');

let elem = document.getElementById('asdf');
console.log(elem?.textContent);

function init(){
    document.getElementById('szam')?.addEventListener('input', szamol);
}

function szamol(){
    let szam = parseInt((document.getElementById('szam') as HTMLInputElement)?.value);
    (document.getElementById('kimenet')as HTMLElement).textContent = negyzet(szam).toString();
}

document.addEventListener('DOMContentLoaded', init);



