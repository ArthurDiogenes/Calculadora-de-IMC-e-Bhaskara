//IMC

let peso = parseInt(147);
let altura = parseFloat(1.84);

let imc = peso / (altura^2);

console.log(`Seu IMC é ${imc}`);

//Bhaskara

let a = parseInt(prompt("Coeficiente 1:"));
let b = parseInt(prompt("Coeficiente 2:"));
let c = parseInt(prompt("Coeficiente 3:"));

let delta = (b*2) - (4*a*c);
let x1 = Number((-b+(Math.sqrt(delta)))/(2*a));
let x2 = Number((-b-(Math.sqrt(delta)))/(2*a));

console.log(x1);
console.log(x2);