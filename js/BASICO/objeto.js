let pessoa = {


    nome: [`Jéssica`, `Fernanda`],
    interesses: [`programação`, `violão`],
    idade: 24,
    sexo: 'feminino',

};

function bio(nome, idade) {
    alert(`O nome dela é: ${this.nome[1]},idade ${this.idade}`);
};


