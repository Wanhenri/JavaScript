 

/*For
for (let i = 0; i <= 5; i++) {


    if (i % 2 !== 1) {
        console.log(i);
        
    }
} */

 //For-in
//contante n muda pq é constante 
//variavel vareia  rs 
const pessoa = {
    nome: 'Jeziga', // nome é uma kay o jeziga é um valor
    idade: 24
}
 
for (let chave in pessoa) {
      console.log(chave);
}

//While

/*do  {} executa uma vez e verifica 
while (i >= 2) {
    
    console.log('maior q 2');
    i++;
}*/

let n = 8;

for (i = 0; i <= 10; i++){
    console.log(`
      ${i} x ${n} = ${i * n}
      `);
}
// a forma q fizemos acima seria essa que somos acostumados a fazer
//console.log(i + " x " + n + " = " + (i * n));