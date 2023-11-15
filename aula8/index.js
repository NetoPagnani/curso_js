const nome = 'Orlando';
const sobrenome = 'Pagnani';
const idade  = 39;
const peso = 92;
const altura = 1.75;
let imc = peso/(altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de  ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
