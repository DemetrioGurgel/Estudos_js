const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifica se o valor é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // fixa a quantidade de casas decimais
console.log(media.toString(2)) // converte para binário
console.log(typeof media) // number

console.log("10" / 2) // 5
console.log("10,2" / 2) // NaN

console.log(0.1 + 0.7) // 0.7999999999999999
