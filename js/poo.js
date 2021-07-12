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