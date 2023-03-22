var entrada8 = require("readline-sync");
var nome = entrada8.question("digite seu nome: ");
var qganha = parseFloat(entrada8.question("salario atual: "));
var work = parseFloat(entrada8.question("digite seus anos de trabalho na empresa: "));
if (work <= 3) {
    var soma = qganha * 1.03;
    console.log("seu novo salario e: " + soma);
}
if (work > 3 && work < 10) {
    var conta1 = qganha * 1.125;
    console.log("seu novo salario e: " + conta1);
}
if (qganha >= 10) {
    var conta2 = qganha * 1.2;
    console.log("seu novo salario e: " + conta2);
}
