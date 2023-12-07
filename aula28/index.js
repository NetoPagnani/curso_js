function formatData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    return 
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil)   




// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); 

// const data = new Date(2019, 3, 20, 15, 14, 27);//a, m, d, h, m, s, ms

// const data = new Date('2019-04-20 20:20:59');
// console.log ('Dia', data.getDate());
// console.log ('Mes', data.getMonth() + 1);
// console.log ('Ano', data.getFullYear());
// console.log ('hora', data.getHours());
// console.log ('Min', data.getMinutes());
// console.log ('Seg', data.getSeconds());
// console.log ('ms', data.getMilliseconds());
// console.log ('Dia semana', data.getDay());
// console.log(data.toString());