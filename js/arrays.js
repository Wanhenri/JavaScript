// se vc precisa armazenar mais de uma informaçao vc cria um array
// SEMPRE COMEÇA DO 0

//               0          1        2         3    4        5            6
let frutas = ["morango", "pera", "laranja", 10, true, new Date(), function () { }];



console.log(frutas[1]);

console.log();

console.log(frutas[5].getFullYear());

console.log();

frutas.forEach(function (value, index) {

    console.log(index, value);
});


//percorrendo o array com FOR
for (let i = 0; i < frutas.length; i++) {


    console.log(`Eu quero ${i}`, frutas[i]);
}