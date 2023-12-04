/*
Entre 0 e 11 - bom dia
Entre 12 e 17 - boa tarde
Entre 18 e 23 - boa noite
*/

/*
if pode ser usado sozinho
else sempre precisa ter um if antes
posso ter varios else if na checagem
so posso ter um else na checagem

*/

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}else if (hora >= 12 && hora <=17) {
    console.log('Boa tarde');
}else if (hora >=18 && hora <= 23) {
    console.log('Boa noite');
}else{
    console.log('Olá');
}