let idade = 20;
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // João Silva
console.log(nomeCompleto.length); // 9
console.log(nomeCompleto.toUpperCase()); // JOÃO SILVA
console.log(nomeCompleto.toLowerCase()); // joão silva
console.log(nomeCompleto[0]); // J
console.log(nomeCompleto[1]); // o
console.log(nomeCompleto[2]); // ã
console.log(nomeCompleto[3]); // o
console.log(nomeCompleto[4]); //
console.log(nomeCompleto[5]); // S
console.log(nomeCompleto[6]); // i
console.log(nomeCompleto[7]); // l
console.log(nomeCompleto[8]); // v
console.log(nomeCompleto[9]); // a

let peso = 80;
let altura = 1.80;
let imc = peso / (altura * altura);
console.log(imc); // 24.691358024691358
console.log(imc.toFixed(2)); // 24.69   // 2 casas decimais
console.log(imc.toFixed(4)); // 24.6914 // 4 casas decimais
console.log(imc.toString(2)); 
console.log(typeof imc); // number