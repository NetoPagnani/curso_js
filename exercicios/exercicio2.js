/*
Escreva uma função chamada ePaisagem que 
recebe dois argumentos, largura e altura
de uma imagem(number).
Retorne true se a imagem estiver no modo 
paisagem.
*/

// function ePaisagem(larg, alt){
//     if (larg > alt){
//         return true;
//     }
//     return false;
// }

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(100, 50));