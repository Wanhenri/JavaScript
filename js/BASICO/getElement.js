
// sempre que for pegar um numero digitado
//tem q tranformar para number pq ele pega como string !
// se n a pessoa digita 5 e o resultado vai dar 52 em vez de 7
const numero = Number(prompt("Digite um numero: "));


const numTitulo = document.getElementById('numTitulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = numero;


texto.innerHTML += `<p>arredonda para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>arredonda para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu numero + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>é intero: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> o numero é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>2 casas decimais ${numero.toFixed(2)} </p>`;