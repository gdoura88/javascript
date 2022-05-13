"use strict";

class Calculette{
    constructor(nb1, nb2){
        this._nb1 = nb1;
        this._nb2 = nb2;
    }

    get nombre1(){
        return this._nb1;
    }

    get nombre2(){
        return this._nb2;
    }

    set nombre1(nb1){
        if(isNaN(nb1)){
            throw new Error("Ceci n'est pas un nombre!");
        }
        this._nb1 = nb1;
    }

    set nombre2(nb2){
        if(isNaN(nb2)){
            throw new Error("Ceci n'est pas un nombre!");
        }
        this._nb2 = nb2;
    }

    additionner(){
        return(this._nb1 + this._nb2);
    }

    multiplier(){
        return this._nb1 * this._nb2;
    }

    soustraire(){
        return(this._nb1 - this._nb2);
    }

    diviser(){
        if(this._nb2 == 0){
            throw new Error("Impossible de diviser par zero!");
        }
        return(this._nb1 / this._nb2);
    }

    modulo(){
        if(this._nb2 == 0){
            throw new Error("Impossible de diviser par zero!");
        }
        return(this._nb1 % this._nb2);
    }
}


//Programme principal
var myCalculette = new Calculette(10, 6);
console.log("Nombre 1 : " + myCalculette.nombre1 + " --- " + "Nombre 2 : " + myCalculette.nombre2);
console.log("Somme : " + myCalculette.additionner());
console.log("produit : " + myCalculette.multiplier());
console.log("difference : " + myCalculette.soustraire());
console.log("division : " + myCalculette.diviser());
console.log("Modulo : " + myCalculette.modulo());

myCalculette.nombre1 = 20;
myCalculette.nombre2 = 0;
console.log("Nombre 1 : " + myCalculette.nombre1 + " --- " + "Nombre 2 : " + myCalculette.nombre2);
console.log("division : " + myCalculette.diviser());