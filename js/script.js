// TIPO VALORES

let idade = 2.4;//no js n diferencia numeros inteiros de decimais 
let nome = 'Jessica'; //string literal
let portaTrancada = true;//boolean recebe apenas o valor verdadeiro/falso
let sobrenome; // undefined
let comidaSelecionada = null // redefine o valor que estava na variavel
console.log(idade);// exibir valor da variavel

//-Nunca coloque numeros no nome da variavel por exemplo 1nome
//-Nomear as variaveis seguindo as boas praticas camelCase exemplos:
//nomeCidade , casaPrincipal , persoPrincipal
//-Nunca coloque nomes aleatórios em variaveis tipo : x , y 
// a maneira correta seria: notaA , listaNomes

//TIPO REFERENCIA -OBJETOS, ARRAYS E FUNÇOES

//- OBJETO
let pessoa ={
    nome: 'Jéssica',
    idade:24,
    portaTrancada: false
};
console.log(pessoa);// exibir valor da variavel
//-ARRAYS
//              0  1  2    3      4       5
let coisas = [12, 3, 15 , 6 , 'Jessica',true];
console.log(coisas [1]);
console.log(coisas.length);// TAMANHO SEMPRE É 1 A MAIS

//-FUNÇÃO

// PARA NOMEAR UMA FUNÇÃO VC SEMPRE USA VERBO+SUBSTANTIVO
let corSite = "azul";


// função sem parametro
// nao devolve nada 
function nomeCor(){
    console.log(corSite);

};

nomeCor();

console.log();//pula linha

//para aumentar as funcionalidades temos q passar parametros ou seja entrada de dados
function alterarCor(cor, tonalidade){
    corSite = cor + ' ' +tonalidade;

};

console.log(corSite);
alterarCor("vermelho","claro");
console.log("Cor: "+ corSite);


console.log();//pula linha


//Faz calculo e retorna o valor
function multPorDois(valor){
    return valor * 2;
};


console.log(multPorDois(5));

let resultado = multPorDois(5);

console.log(resultado);

