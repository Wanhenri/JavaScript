// Obtém a data/hora atual

var data = new Date();
 
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


