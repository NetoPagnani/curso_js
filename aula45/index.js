// try{
// é executada quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o  arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
// é executada quando há erro
//     console.log('Tratando o erro')
// } finally{
// sempre
//     console.log('FINALLY: eu sempre sou executado')
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-br', {
hour12: false
  });
}

const hora = retornaHora();
console.log(hora);
