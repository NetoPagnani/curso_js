const pessoa = {
    nome: 'Orlando',
    sobrenome: 'Pagnani',
    idade: 39,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);
// const {endereco: {rua, numero}} = pessoa;
// console.log(rua,numero);
const { nome, ...resto} = pessoa;
console.log(nome, resto);