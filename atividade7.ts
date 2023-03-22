const entrada7 = require("readline-sync");

let homem1:number = parseFloat(entrada7.question("digite a idade: "));
let homem2:number = parseFloat(entrada7.question("digite a idade : "));
let mulher1:number = parseFloat (entrada7.question("digite a idade : "));
let mulher2:number = parseFloat (entrada7.question("digite a idade: "));

 if(homem1>homem2 && mulher1>mulher2){
let socorro = homem1+mulher2;
let idadex = homem2*mulher1;
console.log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}

if (homem1>homem2 && mulher2>mulher1) {
let socorro = homem1+mulher1;
let idadex = homem2*mulher2;
console. log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}

if (homem2>homem1 && mulher1>mulher2) {
let socorro = homem2+mulher2;
let idadex = homem1*mulher1;
console.log("a soma é:" +socorro + " e a multiplicação é: " +idadex);
}
if (homem2>homem1 && mulher2>mulher1){
let socorro = homem2+mulher1;
let idadex = homem1*mulher2;
console.log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}