// oq acontece dentro da função fica na função

function calc(x, y, operacao) {
    
    return eval(`${x} ${operacao} ${y}`); // "eval" vai pegar a string e executar 

}

let resultado = calc(10, 5, "/");

console.log(resultado); // vai exibir 10

//funcao anonima - ela n tem nome entao ela tem q se tornar um valor
//então vc cria a funcao e ja chama a funcao


(function(x, y, operacao) {
    
    return eval(`${x} ${operacao} ${y}`); // "eval" vai pegar a string e executar 

}) (10, 5, "-");

 //Arrow function - tem mais recursos - n precisa escrever function
// cal vira uma variavel armazenando a funcao
 let calc = (x, y, operacao) => {
    
    return eval(`${x} ${operacao} ${y}`); // "eval" vai pegar a string e executar 

}

//let resultado = calc(10, 5, "/");

//console.log(resultado); // vai exibir 10