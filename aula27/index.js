// operação ternaria = (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsurario = 1000;

const nivelUsuario = pontuacaoUsurario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


// if (pontuacaoUsurario >= 1000){
//     console.log('Usuario Vip');
// }else{
//     console.log('Usuario Normal');
// }