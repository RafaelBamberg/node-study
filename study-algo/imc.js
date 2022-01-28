const calcIMC = (peso,altura) => {
let result = peso / altura ** 2
return result.toFixed(2)
}

module.exports = { calcIMC };