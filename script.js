// IMC

let peso = 147;
let altura = 1.84;

let imc = peso / (altura * altura);
console.log(`Seu IMC é ${imc.toFixed(2)}`);

console.log("Abaixo de 18.5: Abaixo do peso");
console.log("18.5 a 24.9: Peso normal");
console.log("25 a 29.9: Sobrepeso");
console.log("30 a 34.9: Obesidade grau 1");
console.log("35 a 39.9: Obesidade grau 2");
console.log("40 ou mais: Obesidade grau 3 (mórbida)");


//Bhaskara

let a = parseFloat(prompt("Coeficiente a:"));
let b = parseFloat(prompt("Coeficiente b:"));
let c = parseFloat(prompt("Coeficiente c:"));

let delta = (b * b) - (4 * a * c);

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}`);