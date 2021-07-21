function dadosIMC() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const media = document.querySelector('.media');

    const dados = [];

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        dados.push({
            peso: parseInt(peso.value),
            altura: parseInt(altura.value),
            media: parseInt((peso.value / (altura.value * altura.value)).toFixed(2))
        });

        console.log(dados);

        resultado.innerHTML = `<p>Seu imc: ${(peso.value / (altura.value * altura.value)).toFixed(2)}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

dadosIMC();