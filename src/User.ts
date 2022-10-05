export class User {
    #nev: string;
    #eletkor: number;

    constructor(nev: string, eletkor:number){
        this.#nev = nev;
        this.#eletkor = eletkor;
    }

    kiir() : void{
        console.log(this.#nev, this.#eletkor);
    }
}