function MyEscope() {
    const form = document.querySelector('.form')
    const resulted = document.querySelector('.content-result')

    function receiveEvent(evento) {
        evento.preventDefault();
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const imc = weight.value / (height.value * height.value);

        if (weight.value === '' || height.value === '') {
            resulted.innerHTML = `<p class="invalid">Digite seu peso e altura!</p>`;
        }
        else if (weight.value !== Number || height.value !== Number) {
            resulted.innerHTML = `<p class="invalid">Peso ou altura inválida.</p>`;
        }


        if (imc < 18.5) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Abaixo do peso)</strong></p>`;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Peso normal)</strong></p>`;
        }
        else if (imc >= 25 && imc <= 29.9) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Sobrepeso)</strong></p>`;
        }
        else if (imc >= 30 && imc <= 34.9) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Obesidade Grau 1)</strong></p>`;
        }
        else if (imc >= 35 && imc <= 39.9) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Obesidade Grau 2)</strong></p>`;
        }
        else if (imc >= 40) {
            resulted.innerHTML = `<p class="valid">
            Seu IMC é ${imc.toFixed(2)} <strong>(Obesidade Grau 3)</strong></p>`;
        }
    }

    form.addEventListener('submit', receiveEvent);
}

MyEscope();
