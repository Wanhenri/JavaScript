// Obtém a data/hora atual

var data = new Date();

//console.log(data);
/*
//          Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos*/

 
console.log(data.getHours() + ':'+ data.getMinutes());

if(data > 6 && data < 12){

    
console.log('Bom dia !!!');

}
 else if(data >=12 && data <=17){

    console.log('Boa tarde!!!');

 }

else {

    console.log('Boa noiteee !!!');

}



let perm = 'alto';

switch (perm){

    case 'baixo':
        console.log('usuario');
        break;

        case 'medio':
        console.log('gerente');
        break;

        case 'alto':
        console.log('dono');
        break;

        default:
            console.log('Usuario');

}


