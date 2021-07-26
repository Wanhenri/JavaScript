//                 0         1        2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//               0  1  2    0  1  2    0  1  2

const [um, dois] = numero;

console.log(dois[0]);


//const [um, , tres, ...resto] = numero;
//console.log(um, tres);
//console.log(resto);

//... rest, ...spread


// com objetos

const pessoa = {

    nome: 'jessica',
    cel: '(45)998776525',
    endereco: {
        rua: 'Av Brasil',
        num: 360
    }

};

//Atribuição via desestruturação
const {
    endereco: { rua, num }, endereco

} = pessoa;
console.log(rua, num, endereco);

//mostra td menos cel
const { cel, ...resto } = pessoa;
console.log(resto);