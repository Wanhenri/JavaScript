/* JEITO ANTIGO DE SE ESCREVER



let celular = function () {

    this.cor = "celular preto";
    this.ligar = function () {

        console.log("Uma ligação");
        return "ligando";
    }
}

let descricao = new celular();
console.log(descricao.cor);
console.log(descricao.ligar());
*/

// Jeito novo de se escrever uma classe
//ECMAScript

class cel {

    constructor() {

        this.categoria = "edicao limitada";

    }

    ligar() {
        console.log("Uma ligação");
        return "ligando";
    }
}


let objeto = new cel();
console.log(objeto.categoria);
console.log(objeto.ligar());

console.log("");

class Carro {
    // metodo construtor vai ser chamado quando instanciar um obg dessa classe
    constructor(cor, modelo, marca) {
        //atributos sao as variaveis que aplicamos a uma classe
        //posso criar uma variavel dentro ou fora do construtor
        // a diferença é q vms usar let,var ou const
        //e dentro podemos apenas iniciar com um this.nome do atributo
        this.cor = cor
        this.portas = 4
        this.ligado = false
        this.modelo = modelo
        this.marca = marca
        this.combustivel = 10
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    // set serve pra alterar , definir um valor de um atibuto
    set settarCombustivel(valorCombustivel) {

        if (valorCombustivel < 0) {
            // alert("valor invalido");

            console.log("valor invalido");
        }
        else {
            this.combustivel = valorCombustivel;
            console.log(` Combustivel alterado, valor: ${this.combustivel}`)

        }


    }

    //get serve pra obter o valor de um produto

    get getCombustivel() {

        return this.combustivel;
    }

    info() {
        console.log(`
        Cor: ${this.cor},
        Modelo: ${this.modelo}
        Ligado:  ${this.ligado} ,
        Combustivel: ${this.combustivel},
       ` );
    }
}

let c1 = new Carro("Vermelho", "Honda", "Golf");
let c2 = new Carro("Verde", "BMW", "Camaro");
let c3 = new Carro("AZUL", "FERRARI", "HONDA");


c1.ligar();
c3.ligar();

c2.settarCombustivel = 3;

// console.log(c1.getCombustivel);

c1.info();
c2.info();
c3.info();
