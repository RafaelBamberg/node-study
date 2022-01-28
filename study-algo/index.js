// Calcula imc
const { calcIMC } = require("./imc");
const readline = require('readline-sync');

let imcTable = [["Abaixo de 18,5", "Abaixo do peso (magreza)"], 
["Entre 18,5 e 24,9", "Peso normal"], ["Entre 25,0 e 29,9", "Acima do peso (sobrepeso)"], 
["Entre 30,0 e 34,9 ", "Obesidade grau I"]];

let peso = readline.question('Qual seu peso ?');
let altura = readline.question('Qual sua altura ?');

console.log(`Seu IMC e ${calcIMC(peso, altura)}`);
console.table(imcTable)
