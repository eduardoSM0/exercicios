var entrada7 = require("readline-sync");
var homem1 = parseFloat(entrada7.question("digite a idade: "));
var homem2 = parseFloat(entrada7.question("digite a idade : "));
var mulher1 = parseFloat(entrada7.question("digite a idade : "));
var mulher2 = parseFloat(entrada7.question("digite a idade: "));
if (homem1 > homem2 && mulher1 > mulher2) {
    var socorro = homem1 + mulher2;
    var idadex = homem2 * mulher1;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
if (homem1 > homem2 && mulher2 > mulher1) {
    var socorro = homem1 + mulher1;
    var idadex = homem2 * mulher2;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
if (homem2 > homem1 && mulher1 > mulher2) {
    var socorro = homem2 + mulher2;
    var idadex = homem1 * mulher1;
    console.log("a soma é:" + socorro + " e a multiplicação é: " + idadex);
}
if (homem2 > homem1 && mulher2 > mulher1) {
    var socorro = homem2 + mulher1;
    var idadex = homem1 * mulher2;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
