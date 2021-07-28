class cadastroAluno {

    constructor(nome, idade, ra, endereco, telefone) {

        this.nome = nome;
        this.idade = idade;
        this.ra = ra;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    info() {
        console.log(`
        Aluno(a):${this.nome},
        Idade:${this.idade},
        RA:${this.ra},
        Endereço:${this.endereco},
        Telefone:${this.telefone}

        `)
    };

    /*   set numTelefone() {
   
           if (this.telefone === String) {
               console.log('invalido')
           }
   
   
       }*/

}


let aluno1 = new cadastroAluno('Maria', 22, 'F7D4555', 'RUA AV. BRASIL', '(11)14875563');

aluno1.info();


