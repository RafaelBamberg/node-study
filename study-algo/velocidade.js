const readline = require('readline-sync')

const velocidade = (distancia, tempo) => {
    let conv1 = distancia * 1000
    let conv2 = tempo * 60
    let result = conv1 / conv2
    return `${result.toFixed()}m/s`
}

let distancia = readline.questionInt('Quantos kilometros foram percorridos ?');
let tempo = readline.questionInt('Quantas horas foram percorridas ?')

console.log(`A velocidade do carro e ${velocidade(distancia,tempo)}`)