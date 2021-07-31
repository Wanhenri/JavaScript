//Operadores aritimeticos     +  , - ,  * ,  / , **
//Operadores de atribuiçao   -=  , += , =
//Operadores de comparaçao
//Operadores lógicos
//Operadores bitwise
//Temos 2 tipos de operadores de igualdade  solta ==   estrita ===
//operador ternario-  util para fazer comparações substituindo o if

// Igualdade estrita é mais recomendada
console.log(1 === 1);
console.log('1' === 1); // ele esta comparando o tipo então vai retornar falso e n apenas o valor

//Igualdade solta
console.log(1 == 1);
console.log('1' == 1); // ele compara apenas o valor e ignora o tipo então n vale mto a pena utilizar



let preco = 18;

console.log(++preco);// exibe 19
console.log(--preco);// exibe 18    faz o decremento antes de atribuir o valor
/*console.log(preco)
console.log(preco++) 
console.log(preco--) */

//-------------------ATRIBUIÇÃO

preco += preco; // valor 36 é igual preco = preco + preco
preco -= preco; // valor 0 é igual preco = preco - preco
console.log(preco);

//-------------------TERNARIO
                        
let tipo = preco < 100 ? 'barato' : 'caro';
console.log(tipo);

//-------------------OPERADORES LOGICOS
// &&) operador e / and
// retorna true se os 2 forem true

//console.log(true && false);

let maiorDeIdade = false;
let temCarteira = true;

//Retorna true se um dos dois forem true ||
let comparar =   maiorDeIdade || temCarteira ;
console.log('Tem os requisitos: ',comparar);


// Operador NOT

let requisitos =! comparar;

console.log('Foi recusado:',requisitos);


//-------------------Falsy and Truthy
//Falsy - undefined , null , 0 , false , '' , NaN - not a number  
//Truthy

// or (||) precisa encontrar o primeiro valor preenchido para ser considerado como Truthy que é a cor Branco
let corPerso = 'Branco'; // corPerso = '' ele vira um valor Falsy entao exibe a cor Verde no console
let corWeb = 'Verde';
let corPerfil = corPerso || corWeb;

console.log(corPerfil);

         


