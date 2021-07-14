class CalcController {
//parenteses fica os parametros q sao as informações necessarias para funcionar 
    
    constructor() {
        //aqui fica oq eu devo fazer
        //encapsulamento pode controlar as açoes public/protected/private
        //quando usa o underscore  é privado
        this._displayCalc = "0";
        this._currentDate; // atributo é similar a var mas tem mais recursos
        this.initialize();
    }

    initialize() {
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl =   document.querySelector("#hora");


        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "1/7/2021";
        timeEl.innerHTML = "00:00";
}
    get displayCalc() {

        return this._displayCalc;

    }

    set displayCalc(value) {
        
        this.displayCalc = value;
    }

    get currentDate() {
        
        return this._currentDate;
    }

       set currentDate(value) {
        
        this.currentDate = value;
    }
}