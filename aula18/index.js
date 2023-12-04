// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Orlando', 'Pagnani', 39);
// const pessoa2 = criaPessoa('Vinicius', 'Pagnani', 17);
// const pessoa3 = criaPessoa('Luigi', 'Pagnani', 4);
// console.log(pessoa1, pessoa2, pessoa3);

const pessoa1 = {
    nome: 'Orlando',
    sobrenome: 'Pagnani',
    idade: 39,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    },
    incrementaIdade(){
        this.idade++;

    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
