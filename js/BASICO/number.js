let num = 10;
let numB = 2.584878795666;



//vai concatenar pq é string o num1
console.log(num.toString() + numB);

console.log(num);// volta a ser 10


//para conferir o tiipo

console.log(typeof num);

//para deixar permanente em string
num = num.toString();

console.log(num.toString());

//para conferir o tiipo

console.log(typeof num);

//arredondar o numB = 2.584878795666; para 2.58
console.log(numB.toFixed(2));

//retorna se é inteiro = true  ou n = false
console.log(Number.isInteger(numB));


let temp = num * "oi";
let temp2 = num * "7";

// NUNCA FAÇA CONTA UTILIZANDO STRINGS !!!
//retorna se esta invalida ou n se for = true é invalida false é valida
console.log(Number.isNaN(temp));
console.log(Number.isNaN(temp2));


